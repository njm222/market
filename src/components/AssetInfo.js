import { useState, useEffect } from 'react'

import copy from 'clipboard-copy'
import parse from '@react-three/gltfjsx'
import Tippy from '@tippyjs/react'

import { Leva } from 'leva'
import useStore from '@/helpers/store'
import useMaterialStore from '@/helpers/store/materials'
import useHDRIStore from '@/helpers/store/hdri'
import { getMaterialSize } from '@/helpers/getMaterialSize'
import DownloadButton from './info/DownloadButton'
import Tabs from './Tabs'
import License from './info/License'
import Size from './info/Size'
import Creators from './info/Creators'
import Category from './info/Category'
import Views from './info/Views'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

const assetTabHeader = [
  { label: 'Model', value: 'model' },
  { label: 'Material', value: 'material' },
  { label: 'HDRI', value: 'hdri' },
]

const AssetInfo = (asset) => {
  const router = useRouter()
  const assetType = assetTabHeader.find(
    ({ value }) => value === asset.id.split('/')[0]
  )
  const [tab, setTab] = useState(assetType.value)

  const { createBuffer, parsedBuffer, createModelDownloadZip } = useStore(
    (s) => ({
      createBuffer: s.createBuffer,
      parsedBuffer: s.parsedBuffer,
      createModelDownloadZip: s.createModelDownloadZip,
    })
  )

  const {
    createZip,
    createMatcapCodeDownload,
    createPBRCodeDownload,
  } = useMaterialStore((s) => ({
    createZip: s.createZip,
    createMatcapCodeDownload: s.createMatcapCodeDownload,
    createPBRCodeDownload: s.createPBRCodeDownload,
  }))

  const { createHDRIDownload } = useHDRIStore((s) => ({
    createHDRIDownload: s.createHDRIDownload,
  }))

  useEffect(() => {
    if (tab === 'r3f') createBuffer(router.query.name)
  }, [tab, createBuffer, router.query.name])

  const createCode = () => {
    const code = parse(asset.file, parsedBuffer, {
      printwidth: 100,
    })

    return code
  }

  const primitiveCode = `
  function Model(props) {
    const { scene } = useGLTF('${asset.file}')
    return <primitive object={scene} {...props} />
  }`

  const createModelDownload = () => {
    if (assetType.value !== 'model') {
      return
    }
    const code = createCode()
    createModelDownloadZip(asset, code, tab)
  }

  const tabs = [
    {
      name: assetType.label,
      onClick: () => setTab(assetType.value),
      current: tab === assetType.value,
    },
    {
      name: 'React Three Fiber',
      onClick: () => setTab('r3f'),
      current: tab === 'r3f',
    },
    {
      name: 'Three.js',
      onClick: () => setTab('three'),
      current: tab === 'three',
    },
  ]

  return (
    <div className='mt-5'>
      <div className='z-10 hidden mb-6 sm:block w-[70%]'>
        <Leva
          fill
          titleBar={{
            drag: false,
          }}
        />
      </div>
      <aside className='relative'>
        <Creators team={asset.team} creator={asset.creator} />
        <License license={asset.license} />
        {assetType.value !== 'model' && (
          <Size
            size={
              assetType.value === 'material'
                ? getMaterialSize(asset)
                : asset.size
            }
          />
        )}
        <Category category={asset.category} path={`${assetType.value}s`} />
        <Views views={asset.views} />
        <div className='my-4'>
          <Tabs tabs={tabs} />

          {tab !== assetType.value && (
            <DownloadButton
              onClick={() => {
                let promise = copy(createModelDownload())
                if (assetType.value === 'material') {
                  promise =
                    asset.category === 'matcaps'
                      ? createMatcapCodeDownload(asset, tab)
                      : createPBRCodeDownload(asset, tab)
                } else if (assetType.value === 'hdri') {
                  promise = createHDRIDownload(asset, tab)
                }

                toast.promise(promise, {
                  loading: 'Generating Starter Project',
                  success: 'Downloaded',
                })
              }}
              disabled={assetType.value === 'model' && !parsedBuffer}
            >
              Download starter project
            </DownloadButton>
          )}
          {assetType.value === 'model' && tab === 'r3f' && (
            <>
              <DownloadButton
                onClick={() =>
                  toast.promise(copy(createCode()), {
                    loading: 'Generating code',
                    success: 'Copied',
                  })
                }
                disabled={!parsedBuffer}
              >
                Copy JSX Scene Graph
              </DownloadButton>
              <DownloadButton
                onClick={() =>
                  toast.promise(copy(primitiveCode), {
                    loading: 'Generating code',
                    success: 'Copied',
                  })
                }
              >
                Copy Primitive Import
              </DownloadButton>
            </>
          )}

          {tab === 'model' && (
            <>
              <DownloadButton
                href={asset.file}
                download
                style={{ marginTop: 0 }}
              >
                Download Model
              </DownloadButton>
              <DownloadButton
                onClick={() =>
                  toast.promise(copy(asset.file), {
                    loading: 'Generating Link',
                    success: 'Copied',
                  })
                }
              >
                Copy direct link
              </DownloadButton>
            </>
          )}
          {tab === 'material' ? (
            asset.category === 'matcaps' ? (
              <>
                <DownloadButton href={asset.file}>
                  Download Matcap
                </DownloadButton>
                <DownloadButton
                  onClick={() =>
                    toast.promise(copy(asset.file), {
                      loading: 'Copying',
                      success: 'Copied to Clipboard',
                    })
                  }
                >
                  Copy direct link
                </DownloadButton>
              </>
            ) : (
              <>
                <DownloadButton
                  onClick={() =>
                    toast.promise(
                      copy(`
                  const textures = ${JSON.stringify(asset.maps, null, 2)}
                  `),
                      {
                        loading: 'Copying',
                        success: 'Copied to Clipboard',
                      }
                    )
                  }
                >
                  Copy direct links
                </DownloadButton>
                <DownloadButton
                  onClick={() =>
                    toast.promise(createZip(asset), {
                      loading: 'Generating Zip',
                      success: 'Downloaded',
                    })
                  }
                >
                  Download Textures
                </DownloadButton>
              </>
            )
          ) : null}
          {tab === 'hdri' && (
            <>
              <DownloadButton href={asset.file} download>
                Download HDRI
              </DownloadButton>
              <DownloadButton
                onClick={() =>
                  toast.promise(copy(asset.file), {
                    loading: 'Generating Link',
                    success: 'Copied',
                  })
                }
              >
                Copy direct link
              </DownloadButton>
            </>
          )}
        </div>
      </aside>
    </div>
  )
}

export default AssetInfo
