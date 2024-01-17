export interface NewsCrawlerConfig {
  key: string
  configValue: ConfigValue | null
  createdAt: Date
}

export type ConfigValue = {
  enabled: boolean
  topic_mapping: Record<string, string[]>
}

export type NewsCrawlerConfigInput = {
  key: string
  value: string
}

export type UpdateNewsCrawlerConfigInput = {
  key: string
  enabled: boolean
  topicMappings: any[]
}
