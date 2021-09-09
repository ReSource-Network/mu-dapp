import { Text } from "@chakra-ui/layout"
import { chakra, ChakraProps } from "@chakra-ui/system"
import colors from "../../theme/foundations/colors"
import { MuGlyph, MuGlyphSolid } from "./MuGlyph"

export interface GlyphLabelProps extends ChakraProps {
  value?: number | null | string
}

export const GlyphLabel = (props: GlyphLabelProps) => {
  const { value, ...rest } = props

  return (
    <chakra.span {...rest} whiteSpace="nowrap">
      <Label value={value} {...rest} />
      <Glyph {...rest} ml={1} />
    </chakra.span>
  )
}

const Glyph = (props: GlyphLabelProps) => {
  return props.color === colors.blue.main ? (
    <MuGlyph boxSize="12px" display="initial" {...(props as any)} />
  ) : (
    <MuGlyphSolid boxSize="12px" display="initial" {...(props as any)} />
  )
}

const Label = (props: GlyphLabelProps) => {
  const { value } = props
  const numberValue = typeof value === "string" ? parseFloat(value) : value ?? 0
  if (isNaN(numberValue)) throw new Error("could not parse Glyph value")
  const formattedValue = walletValueToString(numberValue)

  return (
    <Text as="span" variant="number" color={props.textColor} {...props}>
      {formattedValue}
    </Text>
  )
}

type OptionsType = { decimals: number }
export const walletValueToString = (val: number, options?: OptionsType) => {
  return val.toLocaleString(undefined, {
    minimumFractionDigits: options?.decimals ?? 2,
    maximumFractionDigits: options?.decimals ?? 2,
  })
}
