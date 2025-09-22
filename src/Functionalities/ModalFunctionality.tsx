import { Button, Modal, Paper, Zoom } from "@mui/material";
import { ComponentsLayout } from "../components/ComponentsLayout";
import { useReducer } from "react";
export const ModalFunctionality = () => {
  const [showModal, toggleShowModal] = useReducer((state) => !state, false);
  const [showModal2, toggleShowModal2] = useReducer((state) => !state, false);
  return (
    <>
      <ComponentsLayout title="Modal Functionality">
        <Button variant="outlined" onClick={() => toggleShowModal()}>
          Show Modal
        </Button>

        <Modal
          //   hideBackdrop // Eliminar la pantalla backdrop - inhabilita el uso de onClose
          // Scroll
          disableScrollLock // Habilitar scroll aun cuando el Modal este abierto -
          // Por defecto, al hacer scroll con el modal abierto, la pagina vuelve a donde estaba cuando se abrio el modal
          disableRestoreFocus // Deshabilitar retorno de scroll con modal abierto
          //
          keepMounted // Evita que se destruya el Modal cuando está cerrado
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          closeAfterTransition
          open={showModal}
          onClose={() => toggleShowModal()}
          slotProps={{
            backdrop: {
              slots: { transition: Zoom },
              sx: { bgcolor: "rgba(30, 21, 154, 0.68)" },
              //   onClick: () => console.log("Backdrop clicked"),
            },
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Zoom in={showModal}>
            <Paper>
              <h2 id="modal-title">My modal title</h2>
              <p id="modal-description">My modal description</p>
              <Button variant="outlined" onClick={() => toggleShowModal2()}>
                Show Nested Modal
              </Button>
              <Modal open={showModal2} onClose={() => toggleShowModal2()}>
                <Paper>Nested modalll</Paper>
              </Modal>
            </Paper>
          </Zoom>
        </Modal>
      </ComponentsLayout>
    </>
  );
};
