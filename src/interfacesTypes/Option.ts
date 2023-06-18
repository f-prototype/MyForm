enum Sex {
  man,
  woman,
}

export type OptionType = { title: string; value: keyof typeof Sex };
