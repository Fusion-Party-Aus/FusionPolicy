/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Categories = "categories",
	Sources = "sources",
	Submissions = "submissions",
	Topics = "topics",
	Users = "users",
	Workstreams = "workstreams",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CategoriesRecord = {
	name?: string
}

export type SourcesRecord = {
	snippet?: string
	title?: string
	link?: string
	submission: RecordIdString
}

export type SubmissionsRecord = {
	user?: RecordIdString
	summary?: HTMLString
	benefit?: HTMLString
	significance?: HTMLString
	workstream?: RecordIdString
}

export type TopicsRecord = {
	name?: string
	category: RecordIdString[]
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

export enum WorkstreamsStatusOptions {
	"Problem Identification" = "Problem Identification",
	"Solution Identification" = "Solution Identification",
	"Implementation" = "Implementation",
}
export type WorkstreamsRecord = {
	name?: string
	blurb?: HTMLString
	topics?: RecordIdString[]
	status?: WorkstreamsStatusOptions
	started?: IsoDateString
}

// Response types include system fields and match responses from the PocketBase API
export type CategoriesResponse = CategoriesRecord & BaseSystemFields
export type SourcesResponse<Texpand = unknown> = SourcesRecord & BaseSystemFields<Texpand>
export type SubmissionsResponse<Texpand = unknown> = SubmissionsRecord & BaseSystemFields<Texpand>
export type TopicsResponse<Texpand = unknown> = TopicsRecord & BaseSystemFields<Texpand>
export type UsersResponse = UsersRecord & AuthSystemFields
export type WorkstreamsResponse<Texpand = unknown> = WorkstreamsRecord & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	categories: CategoriesRecord
	sources: SourcesRecord
	submissions: SubmissionsRecord
	topics: TopicsRecord
	users: UsersRecord
	workstreams: WorkstreamsRecord
}

export type CollectionResponses = {
	categories: CategoriesResponse
	sources: SourcesResponse
	submissions: SubmissionsResponse
	topics: TopicsResponse
	users: UsersResponse
	workstreams: WorkstreamsResponse
}