/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    ServeticaNextJs: {
      type: "sst.aws.Nextjs"
      url: string
    }
  }
}
export {}