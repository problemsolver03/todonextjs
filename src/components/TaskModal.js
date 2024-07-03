import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  Description,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";

export default function TaskModal(props) {
  let [isOpen, setIsOpen] = useState(true);

  function close() {
    setIsOpen(false);
    props.closeCallback(false);
  }

  useEffect(() => {}, [props]);

  return (
    <>
      <Dialog open={isOpen} onClose={close} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-70" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 ">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-lg space-y-4 bg-gray-900 p-12 py-10 rounded-md shadow-xl text-slate-300 border-slate-600 border-2 relative">
            <BiX
              size={"28px"}
              className="absolute right-5 top-5 bg-black hover:bg-transparent"
              onClick={close}
            />
            <DialogTitle className="font-medium text-2xl -mb-4">
              {props.title}
            </DialogTitle>
            <Description className="pb-4 text-[14px] font-normal  text-slate-500">
              <p className="-mt-3">{props.description}</p>
            </Description>
            {props.children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
