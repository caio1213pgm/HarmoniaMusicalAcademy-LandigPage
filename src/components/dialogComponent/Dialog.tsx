/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useRef } from "react";
import style from "./dialog.module.css";

type PropsDialog = {
  children: React.ReactNode;
  textButton: string;
  classButton: string;
};

function Dialog({ children, textButton, classButton }: PropsDialog) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <>
      <button className={classButton} onClick={toggleDialog}>
        {textButton}
      </button>
      <dialog className={style.container} ref={dialogRef}>
        {children}
        <button className={style.close} onClick={toggleDialog}>
          Fechar
        </button>
      </dialog>
    </>
  );
}

export default Dialog;
