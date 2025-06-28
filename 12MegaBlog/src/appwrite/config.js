import conf from '../conf/conf.js';
import { Client ,ID,Databases,Storage,Query} from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title,slug,content,featreImage,status ,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featreImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.error("Error creating post:", error);
        }
        }

        async updatePost(slug,{title,content,featreImage,status }){
            try {
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featreImage,
                        status
                    }
                );
            } catch (error) {
                console.error("Error updating post:", error);
            }
        }

        async deletePost(slug){
            try {
                return await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                );
            } catch (error) {
                console.error("Error deleting post:", error);
            }
        }

        async getPost(slug){
            try {
                return await this.databases.getDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                );
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        }

        async getPosts(quries = [Query.equal('status', 'active')]) {
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    quries
                );
            } catch (error) {
                console.error("Error fetching posts:", error);
            }   
        }
        async uploadFile(file) {
            try {
                return await this.bucket.createFile(
                    conf.appwriteBucketId,
                    ID.unique(),
                    file
                );
            } catch (error) {
                console.error("Error uploading file:", error);
            } 
        }
        async deleteFile(fileId) {
            try {
                return await this.bucket.deleteFile(
                    conf.appwriteBucketId,
                    fileId
                );
            } catch (error) {
                console.error("Error deleting file:", error);
            }
        }

        getFilePreview(fileId){
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId,
            );
        }
    }






const service = new Service()
export default Service