import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/TextArea'

export default function Home() {
  return (
    <div className="-mt-16 flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-400">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-300 shadow-sm hover:bg-blue-50 hover:text-blue-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          className="m-6 flex w-full flex-col gap-5 divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="m-2 text-sm font-medium text-zinc-200"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Mariana" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="da Silva" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="email"
              className="m-2 text-sm font-medium text-zinc-200"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-300" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="mariana@gmail.com"
              />
            </Input.Root>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="m-2 text-sm font-medium text-zinc-200"
            >
              Your photo
              <span className="m-2 block text-sm font-normal text-zinc-400">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="role"
              className="m-2 text-sm font-medium text-zinc-200"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="m-2 text-sm font-medium text-zinc-200"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="m-2 text-sm font-medium text-zinc-200"
            >
              Timezone
            </label>
            <Select placeholder="Select a ">
              <Select placeholder="Select a timezone...">
                <SelectItem
                  value="utc8"
                  text="Pacific Standard Time (UTC-08:00)"
                />
                <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
              </Select>
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="bio"
              className="m-2 text-sm font-medium text-zinc-200"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 bg-slate-900 pt-5">
            <label
              htmlFor="projects"
              className="m-2 text-sm font-medium text-white"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <div />
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-300 shadow-sm hover:bg-blue-50 hover:text-blue-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
