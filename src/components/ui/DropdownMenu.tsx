import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Menu as MenuButton } from "lucide-react";

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative leading-none">
      <Menu.Button className="inline-flex size-8 items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-lime-300">
        <MenuButton />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          as="div"
          className="absolute right-0 mt-8 w-40 origin-top-right rounded-md bg-zinc-900 p-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
        >
          <Menu.Item
            as="a"
            href="https://github.com/zysdev"
            target="_blank"
            className="ui-active:bg-lime-300 ui-active:text-zinc-900 block rounded px-2 py-1 text-lg"
          >
            Sources
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
