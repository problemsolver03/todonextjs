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
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-lg space-y-4 bg-white p-12 rounded-md">
            <DialogTitle className="font-medium text-2xl -mb-4">
              {props.title}
            </DialogTitle>
            <Description className="pb-4">{props.description}</Description>
            {props.children}
            <div className="flex gap-4 pt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-red-500 border-red-500 p-2 rounded-lg border hover:bg-red-500 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-indigo-700 text-white hover:bg-indigo-800 p-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
