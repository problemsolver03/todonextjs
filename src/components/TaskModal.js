import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  Description,
} from "@headlessui/react";
import { useEffect, useState } from "react";

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
        <DialogBackdrop className="fixed inset-0 bg-slate-900 bg-opacity-70" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 ">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-lg space-y-4 bg-white p-12 rounded-md shadow-xl">
            <DialogTitle className="font-medium text-2xl -mb-4">
              {props.title}
            </DialogTitle>
            <Description className="pb-4">{props.description}</Description>
            {props.children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
