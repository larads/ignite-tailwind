import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/TextArea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="mb-5 text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className=" flex flex-col gap-4 border-b bg-slate-50 p-5 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
          <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center">
            <div className="space-y-1">
              <h2 className="text-lg font-medium text-zinc-400">
                Personal info
              </h2>
              <span className="text-sm text-zinc-500">
                Update your photo and personal details here.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button variant="primary" type="submit" form="settings">
                Save
              </Button>
            </div>
          </div>
          <form
            id="settings"
            className="m-6 flex w-full flex-col gap-5 divide-zinc-200"
          >
            <div className="grid grid-cols-form gap-3">
              <label
                htmlFor="firstName"
                className=" text-sm font-medium text-zinc-200"
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
                className=" text-sm font-medium text-zinc-200"
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
                className="text-sm font-medium text-zinc-200"
              >
                Your photo
                <span className=" block text-sm font-normal text-zinc-400">
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
                className="text-sm font-medium text-zinc-200"
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
                className="text-sm font-medium text-zinc-200"
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
                className="text-sm font-medium text-zinc-200"
              >
                Timezone
              </label>
              <Select placeholder="Select a ">
                <Select placeholder="Select a timezone...">
                  <SelectItem
                    value="utc8"
                    text="Pacific Standard Time (UTC-08:00)"
                  />
                  <SelectItem
                    value="utc3"
                    text="America São Paulo (UTC-03:00)"
                  />
                </Select>
              </Select>
            </div>

            <div className="grid grid-cols-form gap-3 pt-5">
              <label
                htmlFor="bio"
                className="text-sm font-medium text-zinc-200"
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
                    <Button type="button" variant="ghost">
                      <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                    </Button>
                    <Button type="button" variant="ghost">
                      <Italic
                        className="h-4 w-4 text-zinc-500"
                        strokeWidth={3}
                      />
                    </Button>
                    <Button type="button" variant="ghost">
                      <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                    </Button>
                    <Button type="button" variant="ghost">
                      <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                    </Button>
                    <Button type="button" variant="ghost">
                      <ListOrdered
                        className="h-4 w-4 text-zinc-500"
                        strokeWidth={3}
                      />
                    </Button>
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
                className="text-sm font-medium text-white"
              >
                Portfolio projects
                <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                  Share a few snippets of your work.
                </span>
              </label>
              <div />
            </div>

            <div className="flex items-center justify-end gap-2 pt-5">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button variant="primary" type="submit" form="settings">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
