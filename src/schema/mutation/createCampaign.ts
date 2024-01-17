import { Campaign, CampaignInput } from '@models/campaign'
import { getClient, gql } from '@utils/graphql'

export async function createCampaign(input: CampaignInput) {
  const result = await getClient().mutate<{ createCampaign: Campaign }>({
    mutation: gql`
      mutation Mutation($input: CreateCampaignInput!) {
        createCampaign(input: $input) {
          id
          name
          description
        }
      }
    `,
    variables: {
      input: {
        name: input.name,
        description: input.description,
      },
    },
  })

  return result?.data?.createCampaign
}
