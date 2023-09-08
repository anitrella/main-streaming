export interface IGetContentResponse {
  code: number;
  status: string;
  isSuccessStatusCode: boolean;
  data: {
    folders: Array<unknown>;
    contents: IContent[];
  };
}

export interface IContent {
  liveStatusOnAir: boolean;
  liveStatusRecording: boolean;
  onDemandFileName: string;
  onDemandEncodingDescription: string;
  onDemandDuration: string;
  gidEncodingProfileOnDemand: string;
  liveMultibitrate: boolean;
  title: string;
  trash: boolean;
  hasPoster: boolean;
  onDemandEncodingStatus: number;
  gidProperty: string;
  contentId: string;
  contentType: number;
  deliveryStatus: number;
  protectedEmbed: boolean;
  creationDate: string;
  updateDate: string;
  publishDateUTC: string;
  publishStatus: number;
  imageUrl: string;
}
