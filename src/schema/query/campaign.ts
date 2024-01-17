import { Campaign } from '@models/campaign'
import { getClient, gql } from '@utils/graphql'

export async function getCampaign(campaignId: string) {
  const result = await getClient().query<{ campaign: Campaign }>({
    query: gql`
      query Campaign($campaignId: String!) {
        campaign(id: $campaignId) {
          description
          id
          name
          hasVouchers
          createdAt
        }
      }
    `,
    variables: {
      campaignId,
    },
  })

  return result.data?.campaign
}
