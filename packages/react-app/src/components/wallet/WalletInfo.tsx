import { Box, BoxProps } from "@chakra-ui/layout"
import { Center, HStack, Text, useDisclosure } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import GlyphLabel from "../glyph/GlyphLabel"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { ethers } from "ethers"
import { useWeb3Context } from "web3-react"
import { getAbbreviatedAddress } from "../../utils/stringFormat"
import WalletInfoModal from "./WalletInfoModal"

const pillContainerStyles: BoxProps = {
  bgColor: "white",
  borderRadius: "2xl",
  border: "1px solid",
  py: 1,
  px: 2,
}

const walletPillContainerStyles: BoxProps = {
  bgColor: "gray.cultured",
  borderRadius: "2xl",
  border: "1px solid gray.cultured",
  py: 1,
  px: 2,
  marginLeft: "1em !important",
}

const WalletInfo = ({ ...rest }: BoxProps) => {
  const history = useHistory()
  const context = useWeb3Context()
  const walletInfoModal = useDisclosure()

  const [walletAddress, setWalletAddress] = useState("")

  useEffect(() => {
    const setWallet = async () => {
      if (!context.library) {
        setWalletAddress("")
        return false
      }
      const provider = new ethers.providers.Web3Provider(context.library.provider)
      setWalletAddress(await provider.getSigner().getAddress())
    }
    setWallet()
  }, [context])

  return (
    <Box {...rest} cursor="pointer">
      <HStack spacing={-10}>
        <Center {...pillContainerStyles} left={0} borderColor="gray.700">
          <GlyphLabel
            loading={false}
            lineHeight="0"
            mx={2}
            pr={10}
            size="sm"
            variant="balance"
            value={0}
          />
        </Center>
        <Center {...pillContainerStyles} right={0} borderColor="primary.dark">
          <GlyphLabel
            loading={false}
            lineHeight="0"
            mx={2}
            size="sm"
            variant="gradient"
            value={0}
          />
        </Center>
        {walletAddress && (
          <>
            <Center {...walletPillContainerStyles} onClick={walletInfoModal.onOpen}>
              <FontAwesomeIcon icon={faCircle} color={"green"} />
              <Text as="span" lineHeight="2" mx={".5em"}>
                {getAbbreviatedAddress(walletAddress)}
              </Text>
            </Center>
            <WalletInfoModal
              isOpen={walletInfoModal.isOpen}
              onClose={walletInfoModal.onClose}
              address={walletAddress}
            />
          </>
        )}
      </HStack>
    </Box>
  )
}

export default WalletInfo
