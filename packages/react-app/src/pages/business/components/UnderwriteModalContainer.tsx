import { Box, BoxProps, Button, useDisclosure } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useWeb3Context } from "web3-react"
import { Business } from "../../../generated/resource-network/graphql"
import { useGetUnderwriteeQuery } from "../../../generated/subgraph/graphql"
import ExtendCreditModal from "../modals/ExtendCreditModal"
import UnderwriteModal from "../modals/UnderwriteModal"

interface Props extends BoxProps {
  business?: Business | null
}
export const UnderwriteModalContainer = ({ business, ...props }: Props) => {
  const underwriteModal = useDisclosure()
  const extendCreditModal = useDisclosure()

  const myWalletAddress = useWeb3Context().account?.toLowerCase()
  const id = business?.wallet?.multiSigAddress?.toLowerCase() ?? ""
  const { data, loading, called } = useGetUnderwriteeQuery({ variables: { id: id }, skip: !id })

  const underwriterAddress = data?.underwritee?.creditLine?.underwriter.id
  const isUnavailable = !!underwriterAddress && underwriterAddress !== myWalletAddress
  console.log("UnderwriteModalContainer.tsx --  underwiteeAddress", id)
  console.log("UnderwriteModalContainer.tsx --  underwiterAddress", underwriterAddress)
  console.log("UnderwriteModalContainer.tsx --  myWalletAddress", myWalletAddress)

  const [currentlyUnderwriting, setCurrentlyUnderwriting] = useState(
    underwriterAddress === myWalletAddress,
  )

  useEffect(() => {
    setCurrentlyUnderwriting(underwriterAddress === myWalletAddress)
  }, [myWalletAddress, underwriterAddress])

  if (!business || !called) return null

  return (
    <Box>
      <Button
        variant="primary"
        colorScheme="blue"
        isLoading={loading}
        isDisabled={isUnavailable}
        onClick={currentlyUnderwriting ? extendCreditModal.onOpen : underwriteModal.onOpen}
      >
        {currentlyUnderwriting ? "Extend credit" : isUnavailable ? "Unavailable" : "Underwrite"}
      </Button>
      <UnderwriteModal
        isOpen={underwriteModal.isOpen}
        onClose={() => {
          underwriteModal.onClose()
          setCurrentlyUnderwriting(true)
        }}
        business={business}
      />
      <ExtendCreditModal
        isOpen={extendCreditModal.isOpen}
        onClose={extendCreditModal.onClose}
        business={business}
      />
    </Box>
  )
}

export const delay = async (ms: number) => {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}
