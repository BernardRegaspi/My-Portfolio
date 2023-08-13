import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span className="navbar-toggler-icon " onClick={onOpen}></span>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#121212">
          <DrawerCloseButton />
          <DrawerHeader>Navigation Bar</DrawerHeader>
          <DrawerBody p='0'>
            <Stack spacing='0'>
              <Link onClick={onClose} className="nav-hover" to="/">Home</Link>
              <Link onClick={onClose} className="nav-hover" to="/skills">Skills</Link>
              <Link onClick={onClose} className="nav-hover" to="/project">Projects</Link>
              <Link onClick={onClose} className="nav-hover" to="/services">Services</Link>
              <Link onClick={onClose} className="nav-hover" to="/about">About</Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
