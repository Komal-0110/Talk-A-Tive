import { ViewIcon } from '@chakra-ui/icons';
import { Button, Center, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const ProfileModel = ({user, children}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
         display={{base : "flex"}}
         icon={<ViewIcon/>}
         onClick={onOpen}></IconButton>
      )}
      <Modal size={"lg"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent height={"350px"}>
          <ModalHeader
          fontFamily={"Work sans"}
          display={"flex"}
          justifyContent={"Center"}
          >{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}>
            <Image
            borderRadius = "full"
            boxSize = "150px"
            src = {user.pic}
            alt = {user.name}>

            </Image>
            <Text
            fontSize={{base:"28px", md: "30px"}}
            fontFamily={"Work sans"}>
                Email : {user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModel
