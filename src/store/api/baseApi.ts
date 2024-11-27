import { emptyApi as api } from "./emptyApi";
export const addTagTypes = [
  "user",
  "app",
  "brand",
  "funnel",
  "offer",
  "plan",
  "ai",
  "book",
  "chapter",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      signup: build.mutation<SignupApiResponse, SignupApiArg>({
        query: (queryArg) => ({
          url: `/signup`,
          method: "POST",
          body: queryArg.signupRequestDto,
        }),
        invalidatesTags: ["user"],
      }),
      login: build.mutation<LoginApiResponse, LoginApiArg>({
        query: (queryArg) => ({
          url: `/login`,
          method: "POST",
          body: queryArg.loginRequestDto,
        }),
        invalidatesTags: ["user"],
      }),
      getMe: build.query<GetMeApiResponse, GetMeApiArg>({
        query: () => ({ url: `/me` }),
        providesTags: ["user"],
      }),
      createApp: build.mutation<CreateAppApiResponse, CreateAppApiArg>({
        query: (queryArg) => ({
          url: `/apps`,
          method: "POST",
          body: queryArg.createAppDto,
        }),
        invalidatesTags: ["app"],
      }),
      getApps: build.query<GetAppsApiResponse, GetAppsApiArg>({
        query: () => ({ url: `/apps` }),
        providesTags: ["app"],
      }),
      getApp: build.query<GetAppApiResponse, GetAppApiArg>({
        query: (queryArg) => ({ url: `/apps/${queryArg.id}` }),
        providesTags: ["app"],
      }),
      updateApp: build.mutation<UpdateAppApiResponse, UpdateAppApiArg>({
        query: (queryArg) => ({
          url: `/apps/${queryArg.id}`,
          method: "PUT",
          body: queryArg.updateAppDto,
        }),
        invalidatesTags: ["app"],
      }),
      deleteApp: build.mutation<DeleteAppApiResponse, DeleteAppApiArg>({
        query: (queryArg) => ({
          url: `/apps/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["app"],
      }),
      createBrand: build.mutation<CreateBrandApiResponse, CreateBrandApiArg>({
        query: (queryArg) => ({
          url: `/brands`,
          method: "POST",
          body: queryArg.createBrandDto,
        }),
        invalidatesTags: ["brand"],
      }),
      getBrands: build.query<GetBrandsApiResponse, GetBrandsApiArg>({
        query: () => ({ url: `/brands` }),
        providesTags: ["brand"],
      }),
      getBrand: build.query<GetBrandApiResponse, GetBrandApiArg>({
        query: (queryArg) => ({ url: `/brands/${queryArg.id}` }),
        providesTags: ["brand"],
      }),
      updateBrand: build.mutation<UpdateBrandApiResponse, UpdateBrandApiArg>({
        query: (queryArg) => ({
          url: `/brands/${queryArg.id}`,
          method: "PUT",
          body: queryArg.updateBrandDto,
        }),
        invalidatesTags: ["brand"],
      }),
      deleteBrand: build.mutation<DeleteBrandApiResponse, DeleteBrandApiArg>({
        query: (queryArg) => ({
          url: `/brands/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["brand"],
      }),
      createFunnel: build.mutation<CreateFunnelApiResponse, CreateFunnelApiArg>(
        {
          query: (queryArg) => ({
            url: `/funnels`,
            method: "POST",
            body: queryArg.createFunnelDto,
          }),
          invalidatesTags: ["funnel"],
        }
      ),
      getFunnels: build.query<GetFunnelsApiResponse, GetFunnelsApiArg>({
        query: () => ({ url: `/funnels` }),
        providesTags: ["funnel"],
      }),
      getFunnel: build.query<GetFunnelApiResponse, GetFunnelApiArg>({
        query: (queryArg) => ({ url: `/funnels/${queryArg.id}` }),
        providesTags: ["funnel"],
      }),
      updateFunnel: build.mutation<UpdateFunnelApiResponse, UpdateFunnelApiArg>(
        {
          query: (queryArg) => ({
            url: `/funnels/${queryArg.id}`,
            method: "PUT",
            body: queryArg.updateFunnelDto,
          }),
          invalidatesTags: ["funnel"],
        }
      ),
      deleteFunnel: build.mutation<DeleteFunnelApiResponse, DeleteFunnelApiArg>(
        {
          query: (queryArg) => ({
            url: `/funnels/${queryArg.id}`,
            method: "DELETE",
          }),
          invalidatesTags: ["funnel"],
        }
      ),
      createOffer: build.mutation<CreateOfferApiResponse, CreateOfferApiArg>({
        query: (queryArg) => ({
          url: `/offers`,
          method: "POST",
          body: queryArg.createOfferDto,
        }),
        invalidatesTags: ["offer"],
      }),
      getOffers: build.query<GetOffersApiResponse, GetOffersApiArg>({
        query: () => ({ url: `/offers` }),
        providesTags: ["offer"],
      }),
      getOffer: build.query<GetOfferApiResponse, GetOfferApiArg>({
        query: (queryArg) => ({ url: `/offers/${queryArg.id}` }),
        providesTags: ["offer"],
      }),
      updateOffer: build.mutation<UpdateOfferApiResponse, UpdateOfferApiArg>({
        query: (queryArg) => ({
          url: `/offers/${queryArg.id}`,
          method: "PUT",
          body: queryArg.updateOfferDto,
        }),
        invalidatesTags: ["offer"],
      }),
      deleteOffer: build.mutation<DeleteOfferApiResponse, DeleteOfferApiArg>({
        query: (queryArg) => ({
          url: `/offers/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["offer"],
      }),
      createPlan: build.mutation<CreatePlanApiResponse, CreatePlanApiArg>({
        query: (queryArg) => ({
          url: `/plans`,
          method: "POST",
          body: queryArg.createPlanDto,
        }),
        invalidatesTags: ["plan"],
      }),
      getPlans: build.query<GetPlansApiResponse, GetPlansApiArg>({
        query: () => ({ url: `/plans` }),
        providesTags: ["plan"],
      }),
      getPlan: build.query<GetPlanApiResponse, GetPlanApiArg>({
        query: (queryArg) => ({ url: `/plans/${queryArg.id}` }),
        providesTags: ["plan"],
      }),
      updatePlan: build.mutation<UpdatePlanApiResponse, UpdatePlanApiArg>({
        query: (queryArg) => ({
          url: `/plans/${queryArg.id}`,
          method: "PUT",
          body: queryArg.updatePlanDto,
        }),
        invalidatesTags: ["plan"],
      }),
      deletePlan: build.mutation<DeletePlanApiResponse, DeletePlanApiArg>({
        query: (queryArg) => ({
          url: `/plans/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["plan"],
      }),
      generateBookContent: build.mutation<
        GenerateBookContentApiResponse,
        GenerateBookContentApiArg
      >({
        query: (queryArg) => ({
          url: `/ai/generate-content`,
          method: "POST",
          body: queryArg.generateContentRequestDto,
        }),
        invalidatesTags: ["ai"],
      }),
      generateBookOutline: build.mutation<
        GenerateBookOutlineApiResponse,
        GenerateBookOutlineApiArg
      >({
        query: (queryArg) => ({
          url: `/ai/generate-outline`,
          method: "POST",
          body: queryArg.generateOutlineRequestDto,
        }),
        invalidatesTags: ["ai"],
      }),
      createBook: build.mutation<CreateBookApiResponse, CreateBookApiArg>({
        query: (queryArg) => ({
          url: `/books`,
          method: "POST",
          body: queryArg.createBookDto,
        }),
        invalidatesTags: ["book"],
      }),
      getBooks: build.query<GetBooksApiResponse, GetBooksApiArg>({
        query: () => ({ url: `/books` }),
        providesTags: ["book"],
      }),
      getBook: build.query<GetBookApiResponse, GetBookApiArg>({
        query: (queryArg) => ({ url: `/books/${queryArg.id}` }),
        providesTags: ["book"],
      }),
      updateBook: build.mutation<UpdateBookApiResponse, UpdateBookApiArg>({
        query: (queryArg) => ({
          url: `/books/${queryArg.id}`,
          method: "PUT",
          body: queryArg.updateBookDto,
        }),
        invalidatesTags: ["book"],
      }),
      deleteBook: build.mutation<DeleteBookApiResponse, DeleteBookApiArg>({
        query: (queryArg) => ({
          url: `/books/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["book"],
      }),
      addBookElements: build.mutation<
        AddBookElementsApiResponse,
        AddBookElementsApiArg
      >({
        query: (queryArg) => ({
          url: `/books/${queryArg.id}/elements`,
          method: "POST",
          body: queryArg.addBookElementsDto,
        }),
        invalidatesTags: ["book"],
      }),
      createChapter: build.mutation<
        CreateChapterApiResponse,
        CreateChapterApiArg
      >({
        query: (queryArg) => ({
          url: `/chapters/${queryArg.appId}`,
          method: "POST",
          body: queryArg.createChapterDto,
        }),
        invalidatesTags: ["chapter"],
      }),
      getChapters: build.query<GetChaptersApiResponse, GetChaptersApiArg>({
        query: (queryArg) => ({ url: `/chapters/${queryArg.appId}` }),
        providesTags: ["chapter"],
      }),
      updateChapter: build.mutation<
        UpdateChapterApiResponse,
        UpdateChapterApiArg
      >({
        query: (queryArg) => ({
          url: `/chapters/${queryArg.id}`,
          method: "PUT",
          body: queryArg.updateChapterDto,
        }),
        invalidatesTags: ["chapter"],
      }),
      deleteChapter: build.mutation<
        DeleteChapterApiResponse,
        DeleteChapterApiArg
      >({
        query: (queryArg) => ({
          url: `/chapters/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["chapter"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as baseApi };
export type SignupApiResponse = /** status 200  */ SignupResponseDto;
export type SignupApiArg = {
  signupRequestDto: SignupRequestDto;
};
export type LoginApiResponse = /** status 200  */ LoginResponseDto;
export type LoginApiArg = {
  loginRequestDto: LoginRequestDto;
};
export type GetMeApiResponse = /** status 200  */ UserDto;
export type GetMeApiArg = void;
export type CreateAppApiResponse = /** status 201  */ AppDto;
export type CreateAppApiArg = {
  createAppDto: CreateAppDto;
};
export type GetAppsApiResponse = /** status 200  */ AppDto[];
export type GetAppsApiArg = void;
export type GetAppApiResponse = /** status 200  */ AppDto;
export type GetAppApiArg = {
  id: string;
};
export type UpdateAppApiResponse = /** status 200  */ AppDto;
export type UpdateAppApiArg = {
  id: string;
  updateAppDto: UpdateAppDto;
};
export type DeleteAppApiResponse = /** status 204  */ void;
export type DeleteAppApiArg = {
  id: string;
};
export type CreateBrandApiResponse = /** status 201  */ BrandDto;
export type CreateBrandApiArg = {
  createBrandDto: CreateBrandDto;
};
export type GetBrandsApiResponse = /** status 200  */ BrandDto[];
export type GetBrandsApiArg = void;
export type GetBrandApiResponse = /** status 200  */ BrandDto;
export type GetBrandApiArg = {
  id: string;
};
export type UpdateBrandApiResponse = /** status 200  */ BrandDto;
export type UpdateBrandApiArg = {
  id: string;
  updateBrandDto: UpdateBrandDto;
};
export type DeleteBrandApiResponse = /** status 204  */ void;
export type DeleteBrandApiArg = {
  id: string;
};
export type CreateFunnelApiResponse = /** status 201  */ FunnelDto;
export type CreateFunnelApiArg = {
  createFunnelDto: CreateFunnelDto;
};
export type GetFunnelsApiResponse = /** status 200  */ FunnelDto[];
export type GetFunnelsApiArg = void;
export type GetFunnelApiResponse = /** status 200  */ FunnelDto;
export type GetFunnelApiArg = {
  id: string;
};
export type UpdateFunnelApiResponse = /** status 200  */ FunnelDto;
export type UpdateFunnelApiArg = {
  id: string;
  updateFunnelDto: UpdateFunnelDto;
};
export type DeleteFunnelApiResponse = /** status 204  */ void;
export type DeleteFunnelApiArg = {
  id: string;
};
export type CreateOfferApiResponse = /** status 201  */ OfferDto;
export type CreateOfferApiArg = {
  createOfferDto: CreateOfferDto;
};
export type GetOffersApiResponse = /** status 200  */ OfferDto[];
export type GetOffersApiArg = void;
export type GetOfferApiResponse = /** status 200  */ OfferDto;
export type GetOfferApiArg = {
  id: string;
};
export type UpdateOfferApiResponse = /** status 200  */ OfferDto;
export type UpdateOfferApiArg = {
  id: string;
  updateOfferDto: UpdateOfferDto;
};
export type DeleteOfferApiResponse = /** status 204  */ void;
export type DeleteOfferApiArg = {
  id: string;
};
export type CreatePlanApiResponse = /** status 201  */ PlanDto;
export type CreatePlanApiArg = {
  createPlanDto: CreatePlanDto;
};
export type GetPlansApiResponse = /** status 200  */ PlanDto[];
export type GetPlansApiArg = void;
export type GetPlanApiResponse = /** status 200  */ PlanDto;
export type GetPlanApiArg = {
  id: string;
};
export type UpdatePlanApiResponse = /** status 200  */ PlanDto;
export type UpdatePlanApiArg = {
  id: string;
  updatePlanDto: UpdatePlanDto;
};
export type DeletePlanApiResponse = /** status 204  */ void;
export type DeletePlanApiArg = {
  id: string;
};
export type GenerateBookContentApiResponse = /** status 200  */ string;
export type GenerateBookContentApiArg = {
  generateContentRequestDto: GenerateContentRequestDto;
};
export type GenerateBookOutlineApiResponse = /** status 200  */ string;
export type GenerateBookOutlineApiArg = {
  generateOutlineRequestDto: GenerateOutlineRequestDto;
};
export type CreateBookApiResponse = /** status 201  */ BookDto;
export type CreateBookApiArg = {
  createBookDto: CreateBookDto;
};
export type GetBooksApiResponse = /** status 200  */ BookDto[];
export type GetBooksApiArg = void;
export type GetBookApiResponse = /** status 200  */ BookDto;
export type GetBookApiArg = {
  id: string;
};
export type UpdateBookApiResponse = /** status 200  */ BookDto;
export type UpdateBookApiArg = {
  id: string;
  updateBookDto: UpdateBookDto;
};
export type DeleteBookApiResponse = /** status 204  */ void;
export type DeleteBookApiArg = {
  id: string;
};
export type AddBookElementsApiResponse = /** status 200  */ BookDto;
export type AddBookElementsApiArg = {
  id: string;
  addBookElementsDto: AddBookElementsDto;
};
export type CreateChapterApiResponse = /** status 201  */ ChapterDto;
export type CreateChapterApiArg = {
  appId: string;
  createChapterDto: CreateChapterDto;
};
export type GetChaptersApiResponse = /** status 200  */ ChapterDto[];
export type GetChaptersApiArg = {
  appId: string;
};
export type UpdateChapterApiResponse = /** status 200  */ ChapterDto;
export type UpdateChapterApiArg = {
  id: string;
  updateChapterDto: UpdateChapterDto;
};
export type DeleteChapterApiResponse = /** status 204  */ void;
export type DeleteChapterApiArg = {
  id: string;
};
export type UserDto = {
  /** The id of the user */
  id: string;
  /** The name of the user */
  email: string;
};
export type SignupResponseDto = {
  accessToken: string;
  user: UserDto;
};
export type ApiErrorDto = {
  /** The error code */
  code?:
    | "internal"
    | "no-access-token"
    | "invalid-access-token"
    | "expired-access-token"
    | "entity-not-found"
    | "incorrect-password"
    | "email-not-unique";
  /** A human-readable message describing the error */
  message: string;
  /** Additional details about the error */
  details?: object;
};
export type SignupRequestDto = {
  email: string;
  password: string;
};
export type LoginResponseDto = {
  accessToken: string;
  user: UserDto;
};
export type LoginRequestDto = {
  email: string;
  password: string;
};
export type AppDto = {
  /** The id of the app */
  id: string;
  /** The title of the app */
  title: string;
  /** The status of the app */
  status: string;
  /** The creation date of the app */
  creationDate: string;
  /** The id of the user who owns this app */
  authorId: string;
  /** The type of the app */
  type: "course" | "book" | "guide";
  /** The last update date of the app */
  lastUpdateDate: string;
};
export type CreateAppDto = {
  /** The title of the app */
  title: string;
  /** The status of the app */
  status: string;
  /** The type of the app */
  type: "course" | "book" | "guide";
};
export type UpdateAppDto = {
  /** The title of the app */
  title?: string;
  /** The status of the app */
  status?: string;
  /** The creation date of the app */
  creationDate?: string;
  /** The ID of the app author */
  authorId?: string;
};
export type BrandDto = {
  /** The id of the brand */
  id: string;
  /** The name of the brand */
  name: string;
  /** The URL of the brand */
  url: string;
  /** The description of the brand */
  description: string;
  /** The logo URL of the brand */
  logo: string;
  /** Whether the brand is active */
  isActive: boolean;
  /** The brand color in hex format */
  color: string;
  /** The ID of the brand owner */
  ownerId: string;
  /** The ID of the plan */
  planId: string;
};
export type CreateBrandDto = {
  /** The name of the brand */
  name: string;
  /** The URL of the brand */
  url: string;
  /** The description of the brand */
  description: string;
  /** The logo URL of the brand */
  logo: string;
  /** Whether the brand is active */
  isActive: boolean;
  /** The brand color in hex format */
  color: string;
  /** The ID of the plan */
  planId: string;
};
export type UpdateBrandDto = {
  /** The name of the brand */
  name?: string;
  /** The URL of the brand */
  url?: string;
  /** The description of the brand */
  description?: string;
  /** The logo URL of the brand */
  logo?: string;
  /** Whether the brand is active */
  isActive?: boolean;
  /** The brand color in hex format */
  color?: string;
  /** The ID of the brand owner */
  ownerId?: string;
  /** The ID of the plan */
  planId?: string;
};
export type FunnelDto = {
  /** The id of the funnel */
  id: string;
  /** The title of the funnel */
  title: string;
  /** The creation date of the funnel */
  creationDate: string;
  /** The status of the funnel */
  status: string;
  /** The revenue generated by the funnel */
  revenue: number;
  /** Total traffic through the funnel */
  totalTraffic: number;
  /** Conversion rate of the funnel */
  conversionRate: number;
  /** Average order value */
  aov: number;
  /** Average time spent in funnel */
  timeInFunnel: number;
  /** Upsell rate percentage */
  upsellRate: number;
  /** Downsell rate percentage */
  downsellRate: number;
  /** Number of steps in the funnel */
  steps: number;
  /** The id of the user who owns this funnel */
  authorId: string;
};
export type CreateFunnelDto = {
  /** The title of the funnel */
  title: string;
  /** The status of the funnel */
  status: string;
  /** The revenue generated by the funnel */
  revenue: number;
  /** Total traffic through the funnel */
  totalTraffic: number;
  /** Conversion rate of the funnel */
  conversionRate: number;
  /** Average order value */
  aov: number;
  /** Average time spent in funnel */
  timeInFunnel: number;
  /** Upsell rate percentage */
  upsellRate: number;
  /** Downsell rate percentage */
  downsellRate: number;
  /** Number of steps in the funnel */
  steps: number;
};
export type UpdateFunnelDto = {
  /** The title of the funnel */
  title?: string;
  /** The creation date of the funnel */
  creationDate?: string;
  /** The status of the funnel */
  status?: string;
  /** The revenue generated by the funnel */
  revenue?: number;
  /** Total traffic through the funnel */
  totalTraffic?: number;
  /** Conversion rate of the funnel */
  conversionRate?: number;
  /** Average order value */
  aov?: number;
  /** Average time spent in funnel */
  timeInFunnel?: number;
  /** Upsell rate percentage */
  upsellRate?: number;
  /** Downsell rate percentage */
  downsellRate?: number;
  /** Number of steps in the funnel */
  steps?: number;
  /** The ID of the funnel author */
  authorId?: string;
};
export type OfferDto = {
  /** The id of the offer */
  id: string;
  /** The title of the offer */
  title: string;
  /** The creation date of the offer */
  creationDate: string;
  /** The status of the offer */
  status: string;
  /** The revenue of the offer */
  revenue: number;
  /** Number of customers */
  customers: number;
  /** Number of apps */
  apps: number;
  /** Customer Satisfaction Score */
  csat: number;
  /** Net Promoter Score */
  nps: number;
  /** Customer Effort Score */
  ces: number;
  /** The id of the user who owns this offer */
  authorId: string;
};
export type CreateOfferDto = {
  /** The title of the offer */
  title: string;
  /** The status of the offer */
  status: string;
  /** The revenue of the offer */
  revenue: number;
  /** The number of customers */
  customers: number;
  /** The number of apps */
  apps: number;
  /** Customer Satisfaction Score */
  csat: number;
  /** Net Promoter Score */
  nps: number;
  /** Customer Effort Score */
  ces: number;
};
export type UpdateOfferDto = {
  /** The title of the offer */
  title?: string;
  /** The creation date of the offer */
  creationDate?: string;
  /** The status of the offer */
  status?: string;
  /** The revenue of the offer */
  revenue?: number;
  /** The number of customers */
  customers?: number;
  /** The number of apps */
  apps?: number;
  /** Customer Satisfaction Score */
  csat?: number;
  /** Net Promoter Score */
  nps?: number;
  /** Customer Effort Score */
  ces?: number;
  /** The ID of the offer author */
  authorId?: string;
};
export type PlanDto = {
  /** The id of the plan */
  id: string;
  /** The type of the plan */
  type: string;
  /** The title of the plan */
  title: string;
  /** The price of the plan */
  price: number;
  /** The features included in the plan */
  features: any[];
  /** The brands associated with the plan */
  brands: any[];
};
export type CreatePlanDto = {
  /** The type of the plan */
  type: string;
  /** The title of the plan */
  title: string;
  /** The price of the plan */
  price: number;
  /** The features included in the plan */
  features: any[];
};
export type UpdatePlanDto = {
  /** The type of the plan */
  type?: string;
  /** The title of the plan */
  title?: string;
  /** The price of the plan */
  price?: number;
  /** The features included in the plan */
  features?: any[];
  /** The brands associated with the plan */
  brands?: any[];
};
export type GenerateContentRequestDto = {
  /** The title of the book */
  title: string;
  /** The outline of the book */
  outline: object;
};
export type GenerateOutlineRequestDto = {
  /** The title of the book */
  title: string;
  /** The subtitle of the book */
  subtitle: string;
  /** The description of the book */
  description: string;
  /** The number of chapters in the book */
  chaptersCount: number;
  /** The target audience of the book */
  targetAudience: string;
};
export type BookDto = {
  /** The id of the book */
  id: string;
  /** The title of the book */
  title: string;
  /** The content of the book */
  content: string;
  /** The last edited date of the book */
  edited: string;
  /** The id of the user who owns this book */
  authorId: string;
  /** The content structure of the book */
  contentStructure: string[];
};
export type CreateBookDto = {
  /** The title of the book */
  title: string;
  /** The content of the book */
  content: string;
};
export type UpdateBookDto = {
  /** The title of the book */
  title?: string;
  /** The content of the book */
  content?: string;
  /** The last edited date of the book */
  edited?: string;
  /** The ID of the book author */
  authorId?: string;
};
export type BookElementDto = {
  /** The type of the book element */
  type: "introduction" | "folder" | "conclusion";
  /** The title of the book element */
  title: string;
};
export type AddBookElementsDto = {
  /** Array of book elements */
  elements: BookElementDto[];
};
export type ChapterDto = {
  /** The id of the chapter */
  id: string;
  /** The title of the chapter */
  title: string;
  /** The content of the chapter */
  content: string;
  /** The type of the chapter */
  type:
    | "introduction"
    | "chapter"
    | "conclusion"
    | "titlePage"
    | "copyright"
    | "tableOfContents"
    | "part"
    | "cover";
  /** The id of the app this chapter belongs to */
  appId: string;
};
export type CreateChapterDto = {
  /** The title of the chapter */
  title: string;
  /** The content of the chapter */
  content: string;
  /** The type of the chapter */
  type:
    | "introduction"
    | "chapter"
    | "conclusion"
    | "titlePage"
    | "copyright"
    | "tableOfContents"
    | "part"
    | "cover";
};
export type UpdateChapterDto = {
  /** The title of the chapter */
  title?: string;
  /** The content of the chapter */
  content?: string;
  /** The type of the chapter */
  type:
    | "introduction"
    | "chapter"
    | "conclusion"
    | "titlePage"
    | "copyright"
    | "tableOfContents"
    | "part"
    | "cover";
  /** The id of the app this chapter belongs to */
  appId?: string;
};
export const {
  useSignupMutation,
  useLoginMutation,
  useGetMeQuery,
  useCreateAppMutation,
  useGetAppsQuery,
  useGetAppQuery,
  useUpdateAppMutation,
  useDeleteAppMutation,
  useCreateBrandMutation,
  useGetBrandsQuery,
  useGetBrandQuery,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
  useCreateFunnelMutation,
  useGetFunnelsQuery,
  useGetFunnelQuery,
  useUpdateFunnelMutation,
  useDeleteFunnelMutation,
  useCreateOfferMutation,
  useGetOffersQuery,
  useGetOfferQuery,
  useUpdateOfferMutation,
  useDeleteOfferMutation,
  useCreatePlanMutation,
  useGetPlansQuery,
  useGetPlanQuery,
  useUpdatePlanMutation,
  useDeletePlanMutation,
  useGenerateBookContentMutation,
  useGenerateBookOutlineMutation,
  useCreateBookMutation,
  useGetBooksQuery,
  useGetBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useAddBookElementsMutation,
  useCreateChapterMutation,
  useGetChaptersQuery,
  useUpdateChapterMutation,
  useDeleteChapterMutation,
} = injectedRtkApi;
