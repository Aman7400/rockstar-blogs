import { Button, Input, ListItem, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react'

const SearchModal = ({ isOpen, onClose, items, searchQuery, onChange }) => {

    let searchInputProps = {
        variant: "filled",
        size: "lg",
        color: "red.500",
        placeholder: 'Search with keywords...',
        value: searchQuery,
        onChange: onChange
    }

    return (
        <Modal onClose={onClose} size={"2xl"} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Input {...searchInputProps} />
                </ModalHeader>
                <ModalBody>
                    <UnorderedList>
                        {
                            items.map((title, i) =>
                                <ListItem mb={2} onClick={onClose} key={i}>
                                    <Text>
                                        <Link href={`/blogs/${i}`}>
                                            {title}
                                        </Link>
                                    </Text>
                                </ListItem>)
                        }
                    </UnorderedList>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme={"red"} onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default SearchModal