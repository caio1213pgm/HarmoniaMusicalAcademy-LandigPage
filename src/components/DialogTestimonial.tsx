import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Botao from "./Botao";

type DialogProps = {
  name: string;
  text: string;
  contentButton: string
  classe: string
  isOpen: () => void
  aberto: boolean
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ name, text, contentButton, classe, isOpen, aberto }: DialogProps) {


  return (
    <React.Fragment>
      <Botao texto={contentButton} funcao={isOpen} classe={classe}/>
      <BootstrapDialog
        onClose={isOpen}
        aria-labelledby="customized-dialog-title"
        open={aberto}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, fontSize: "1.8rem" }}
          id="customized-dialog-title"
        >
          {name}
        </DialogTitle>
        <DialogContent sx={{ fontSize: "1rem" }}>{text}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={isOpen} sx={{ color: "#002855" }}>
            Fechar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
