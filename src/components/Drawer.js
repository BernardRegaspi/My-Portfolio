import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Button,
} from "@chakra-ui/react";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HamburgerIcon className="d-md-none d-lg" onClick={onOpen}/>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#121212">
          <DrawerCloseButton />
          <DrawerHeader>Navigation Bar</DrawerHeader>

          <DrawerBody p='0'>
          <Stack spacing='0'>
            <Link className="nav-hover" to="/">Home</Link>
            <Link className="nav-hover" to="/skills">Skills</Link>
            <Link className="nav-hover" to="/project">Projects</Link>
            <Link className="nav-hover" to="/services">Services</Link>
            <Link className="nav-hover" to="/about">About</Link>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
