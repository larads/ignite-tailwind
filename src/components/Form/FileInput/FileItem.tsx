import { Button } from '@/components/Button'
import { CheckCircle2, Image as ImageIcon, Trash2 } from 'lucide-react'
import { useMemo } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    base: 'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'relative rounded-full border-4 border-blue-100 bg-blue-200 p-2 text-blue-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
    deleteButton: 'text-zinc-500 hover:text-blue-500',
  },
  variants: {
    state: {
      progress: {
        base: 'dark:border-zinc-700',
      },
      complete: {
        base: 'border-blue-500 dark:border-blue-300/20',
      },
      error: {
        base: 'bg-error-25 border-error-300 dark:bg-error-500/5 dark:border-error-500/30',
        icon: 'border-error-50 bg-error-100 text-error-600 dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400',
        deleteButton:
          'text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
  type: string
}

export function FileItem({ state, name, size }: FileItemProps) {
  const uploadProgress = state === 'complete' ? '100%' : '25%'

  const fileSize = useMemo(() => {
    const fileSizeInKB = size / 1024

    if (fileSizeInKB > 1024) {
      const fileSizeInMB = fileSizeInKB / 1024

      return fileSizeInMB.toFixed(1).concat(' MB')
    }

    return fileSizeInKB.toFixed(1).concat(' KB')
  }, [size])

  const { base, icon, deleteButton } = fileItem({ state })

  return (
    <div className={base()}>
      <span className={icon()}>
        <ImageIcon className="h-4 w-4" />
      </span>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col leading-relaxed">
            <span className="text-error-700 dark:text-error-400 text-sm font-medium">
              Upload failed, please try again
            </span>
            <span className="text-error-600 dark:text-error-500 text-sm">
              {name}
            </span>
          </div>

          <button
            type="button"
            className="text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300 text-sm font-semibold"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col leading-relaxed">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {name}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {fileSize}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
              <div
                className="h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                style={{ width: uploadProgress }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              {uploadProgress}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-blue-600 text-white dark:fill-blue-300 dark:text-zinc-900" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
