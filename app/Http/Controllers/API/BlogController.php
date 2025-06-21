<?php

namespace App\Http\Controllers\API;

use App\Exceptions\GlobalException as GlobalException;
use App\Http\Controllers\Controller;

use App\Http\Utils\ResponseHandler;
use App\Models\{
    Constants,
    Blog,
    User
};

use App\Http\Resources\BlogResource;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

use App\Http\Requests\{
    AddBlogRequest,
    EditBlogRequest
};

class BlogController extends Controller
{

    private $const;
    public function __construct()
    {
        $this->const = (new Constants)->getConstants();
    }


    // public function addBlog(AddBlogRequest $request)
    // {

    //     try {

    //             $blogImagePath = env('DEFAULT_BLOG_IMAGE');

    //             if($request->hasFile('image')){
    //                 $blogImageFile = $request->file('image');
    //                 $blogImage = str_replace(' ', '', $blogImageFile->getClientOriginalName());
    //                 $blogImageFile->move(public_path(env('BLOG') . '/' . str_replace(' ','',$request->title)), $blogImage);
    //                 $blogImagePath = asset(env('BLOG') . '/' . str_replace(' ','',$request->title)) . '/' . $blogImage;

    //             }


    //             $addBlog = Blog::create([
    //                 'title'=>$request->title,
    //                 'shortDesc'=>$request->shortDesc,
    //                 'longDesc'=>$request->longDesc,
    //                 'createdBy'=>$request->createdBy,
    //                 'image'=>$blogImagePath,
    //             ]);

    //             if($addBlog)
    //                 return (new ResponseHandler)->sendSuccessResponse(['message' => $this->const['BLOG_ADD']]);


    //     } catch (Exception $e) {

    //         throw new GlobalException;
    //     }
    // }

    // public function editBlog(EditBlogRequest $request)
    // {

    //     try {

    //         $checkImageFile = Blog::where('id', $request->id)
    //         ->where('isActive', 1)->select('image')->first();

    //         if($request->hasFile('image')){

    //             if (!empty($checkImageFile->customerImage)) {
    //                 if (File::exists(public_path(substr($checkImageFile->customerImage, 22)))) {
    //                     $deleteFile = public_path(substr($checkImageFile->customerImage, 22));
    //                     File::delete($deleteFile);
    //                 }
    //             }

    //             $blogImageFile = $request->file('image');
    //             $blogImage = str_replace(' ', '', $blogImageFile->getClientOriginalName());
    //             $blogImageFile->move(public_path(env('BLOG') . '/' . str_replace(' ','',$request->title)), $blogImage);
    //             $blogImagePath = asset(env('BLOG') . '/' . str_replace(' ','',$request->title)) . '/' . $blogImage;

    //         }


    //         $editBlog = Blog::where('id',$request->id)
    //         ->update([
    //             'title'=>$request->title,
    //             'shortDesc'=>$request->shortDesc,
    //             'longDesc'=>$request->longDesc,
    //             'createdBy'=>$request->createdBy,
    //             'image'=>$blogImagePath ?? $checkImageFile->image ?? env('DEFAULT_BLOG_IMAGE'),
    //         ]);

    //         if($editBlog)
    //             return (new ResponseHandler)->sendSuccessResponse(['message' => $this->const['BLOG_UPDATE']]);
    //         return (new ResponseHandler)->sendErrorResponse(['message' => $this->const['UNABLE_TO_UPDATE']], 400);



    //     } catch (Exception $e) {

    //         throw new GlobalException;
    //     }
    // }

    // public function deleteBlog(Request $request, $id)
    // {
    //     try {


    //             $deleteBlog = Blog::where('id', $id)->first();

    //             if($deleteBlog->isActive == '0')
    //                 return (new ResponseHandler)->sendErrorResponse(['message' => $this->const['UNABLE_TO_DELETE']], 400);

    //             $deleteBlog->update(['isActive' => 0]);

    //             if ($deleteBlog)
    //                 return (new ResponseHandler)->sendSuccessResponse(['message' => $this->const['BLOG_DELETE']]);

    //             return (new ResponseHandler)->sendErrorResponse(['message' => $this->const['UNABLE_TO_DELETE']], 400);


    //     } catch (Exception $e) {

    //         throw new GlobalException;

    //     }
    // }

    // public function getAllBlog(Request $request)
    // {
    //     try {


    //         $pageOffset = (isset($request->pageOffset)) ? (int) $request->pageOffset : 12;

    //         $orderBy = (isset($request->orderBy)) ? $request->orderBy : 'title';

    //         $sort = (isset($request->sort)) ? $request->sort : 'desc';

    //         $getAllBlog = Blog::where('blogs.isActive',1)
    //         ->leftJoin('users','users.id','=','blogs.createdBy')
    //         ->select('blogs.id','title','shortDesc','longDesc','image','blogs.isActive','users.name', DB::raw('DATE_FORMAT(blogs.createdAt, "%d-%b-%Y") as addedAt'));



    //         foreach ($getAllBlog as $val) {
    //             $getAllBlog->shortDesc = htmlspecialchars($val->shortDesc);
    //             $getAllBlog->longDesc = htmlspecialchars($val->longDesc);
    //         }


    //         if(!empty($request->input('latest')) && $request->input('latest') == true)
    //         {

    //             $getAllBlog = $getAllBlog->limit(6)
    //             ->orderBy('id','desc')
    //             ->get();

    //         }
    //         else
    //         {

    //             if(!empty($request->searchValue))
    //             {
    //                 $getAllBlog = $getAllBlog->where('title',$request->searchValue)
    //                 ->orWhere('shortDesc','LIKE', '%' .$request->searchValue. '%')
    //                 ->orWhere('longDesc','LIKE', '%' .$request->searchValue. '%');
    //             }

    //             $getAllBlog = $getAllBlog->orderBy($orderBy,$sort)
    //             ->paginate($pageOffset);
    //         }


    //         return (new ResponseHandler)->sendSuccessResponse(new BlogResource($getAllBlog));

    //     } catch (Exception $e) {

    //         throw new GlobalException;

    //     }
    // }


    // public function getBlogById(Request $request,$id)
    // {
    //     try {


    //         $getBlogById = Blog::where('blogs.isActive',1)
    //         ->where('blogs.id',$id)
    //         ->leftJoin('users','users.id','=','blogs.createdBy')
    //         ->select('blogs.id','title','shortDesc','longDesc','image','blogs.isActive','users.name',DB::raw('DATE_FORMAT(blogs.createdAt, "%d-%b-%Y") as addedAt'))
    //         ->first();


    //             $getBlogById->shortDesc = htmlspecialchars($getBlogById->shortDesc);
    //             $getBlogById->longDesc = htmlspecialchars($getBlogById->longDesc);


    //         return (new ResponseHandler)->sendSuccessResponse(new BlogResource($getBlogById));

    //     } catch (Exception $e) {

    //         throw new GlobalException;

    //     }
    // }

    // public function getAllUser(Request $request)
    // {
    //     try {


    //         $getAllUser = User::where('isActive',1)
    //         ->select('id','name')
    //         ->get();

    //         return (new ResponseHandler)->sendSuccessResponse(new BlogResource($getAllUser));

    //     } catch (Exception $e) {

    //         throw new GlobalException;

    //     }
    // }


    public function addBlog(AddBlogRequest $request)
    {

        try {

            if(!empty($request->id))
            {

                $hashTags = str_replace(['[', ']', '"'], '', $request->hashTags);

                $seoKeywords = str_replace(['[', ']', '"'], '', $request->seoKeywords);

                $update = Blog::where('id',$request->id)->update([
                    'title'=>$request->title,
                    'shortDesc'=>$request->shortDesc,
                    'longDesc'=>$request->longDesc,
                    'hashTags'=>$hashTags,
                    'seoKeywords'=>$seoKeywords,
                    'blogCategory'=>$request->blogCategory,
                    'timeToRead'=>$request->timeToRead,
                ]);

                if($update)
                {

                    if($request->isVideo)
                    {

                        foreach($request->media as $media)
                        {

                                BlogImage::updateOrCreate(
                                ['blog_id' => $request->id,'media' => $media],
                                ['media' => $media]
                                );


                            Blog::where('id',$request->id)->update([
                                'isVideo'=>1
                            ]);
                        }

                        $get_created_blog = Blog::with(['media' => function ($query) {
                            $query->select('blog_id','media');
                        }])
                        ->where('blogs.id',$request->id)
                        ->join('blog_category_masters','blog_category_masters.id','=','blogs.blogCategory')
                        ->select('blogs.id','title','blog_category_masters.name','shortDesc','longDesc','timeToRead','hashTags','seoKeywords','isVideo')
                        ->first();

                        $get_created_blog->hashTags = explode(',',$get_created_blog->hashTags);

                        $get_created_blog->seoKeywords = explode(',',$get_created_blog->seoKeywords);

                        return (new ResponseHandler)->sendSuccessResponse(['message' => $this->const['BLOG_UPDATE'],'blog_data'=>$get_created_blog]);

                    }


                    if($request->hasFile('media'))
                    {

                        foreach($request->file('media') as $image)
                        {

                            $blogImage = str_replace(' ', '', $image->getClientOriginalName());
                            $blogImagePath = asset(env('BLOG') .'/'.$request->user->id.'/'. str_replace(' ','',$request->title)) . '/' . $blogImage;

                            $image->move(public_path(env('BLOG') .'/'.$request->user->id.'/'. str_replace(' ','',$request->title)), $blogImage);

                            BlogImage::create([
                                'media' => $blogImagePath,
                                'blog_id'=> $request->id,
                            ]);
                        }

                        $get_created_blog = Blog::with(['media' => function ($query) {
                            $query->select('blog_id','media');
                        }])
                        ->where('blogs.id',$request->id)
                        ->join('blog_category_masters','blog_category_masters.id','=','blogs.blogCategory')
                        ->select('blogs.id','title','blog_category_masters.name','shortDesc','longDesc','timeToRead','hashTags','seoKeywords','isVideo')
                        ->first();

                        $get_created_blog->hashTags = explode(',',$get_created_blog->hashTags);

                        $get_created_blog->seoKeywords = explode(',',$get_created_blog->seoKeywords);

                        return (new ResponseHandler)->sendSuccessResponse(['message' => $this->const['BLOG_UPDATE'],'blog_data'=>$get_created_blog]);

                    }

                }
            }
            else
            {
                $hashTags = str_replace(['[', ']', '"'], '', $request->hashTags);

                $seoKeywords = str_replace(['[', ']', '"'], '', $request->seoKeywords);
                // new records
                $addBlog = Blog::insertGetId([
                    'title'=>$request->title,
                    'shortDesc'=>$request->shortDesc,
                    'longDesc'=>$request->longDesc,
                    'hashTags'=>$hashTags,
                    'blogCategory'=>$request->blogCategory,
                    'seoKeywords'=>$seoKeywords,
                    'timeToRead'=>$request->timeToRead,
                    'createdBy'=>$request->user->id,
                ]);

                if($addBlog)
                {

                    if($request->isVideo == 1){

                        foreach($request->media as $media)
                        {

                            BlogImage::updateOrCreate(
                                ['blog_id' => $addBlog,'media' => $media],
                                ['media' => $media]
                            );

                            Blog::where('id',$addBlog)->update([
                                'isVideo'=>1
                            ]);
                        }


                        $get_created_blog = Blog::with(['media' => function ($query) {
                            $query->select('id','blog_id','media');
                        }])
                        ->where('blogs.id',$addBlog)
                        ->join('blog_category_masters','blog_category_masters.id','=','blogs.blogCategory')
                        ->select('blogs.id','title','blog_category_masters.name','shortDesc','longDesc','timeToRead','hashTags','seoKeywords','isVideo')
                        ->first();


                        $get_created_blog->hashTags = explode(',',$get_created_blog->hashTags);
                        $get_created_blog->seoKeywords = explode(',',$get_created_blog->seoKeywords);

                        return (new ResponseHandler)->sendSuccessResponse(['message' => $this->const['BLOG_ADD'],'blog_data'=>$get_created_blog]);


                    }

                    if($request->hasFile('media'))
                    {
                        foreach((array)$request->file('media') as $image)
                        {
                            $blogImage = str_replace(' ', '', $image->getClientOriginalName());
                            $image->move(public_path(env('BLOG') .'/'.$request->user->id.'/'. str_replace(' ','',$request->title)), $blogImage);
                            $blogImagePath = asset(env('BLOG') .'/'.$request->user->id.'/'. str_replace(' ','',$request->title)) . '/' . $blogImage;

                            BlogImage::create([
                                'media'=>$blogImagePath,
                                'blog_id'=>$addBlog,
                            ]);
                        }

                        $get_created_blog = Blog::with(['media' => function ($query) {
                            $query->select('id','blog_id','media');
                        }])
                        ->where('blogs.id',$addBlog)
                        ->join('blog_category_masters','blog_category_masters.id','=','blogs.blogCategory')
                        ->select('blogs.id','title','blog_category_masters.name','shortDesc','longDesc','timeToRead','hashTags','seoKeywords','isVideo')
                        ->first();

                        $get_created_blog->hashTags = explode(',',$get_created_blog->hashTags);
                        $get_created_blog->seoKeywords = explode(',',$get_created_blog->seoKeywords);

                        return (new ResponseHandler)->sendSuccessResponse(['message' => $this->const['BLOG_ADD'],'blog_data'=>$get_created_blog]);

                    }

                }

            }

        } catch (Exception $e) {
            dd($e);
            throw new GlobalException;
        }
    }


    public function deleteBlog(Request $request, $id)
    {
        try {
           
                $deleteBlog = Blog::where('id', $id)->where('isActive',1)->first();

                if(!empty($deleteBlog))
                {
                    if($deleteBlog->isActive == '0')
                        return (new ResponseHandler)->sendErrorResponse(['message' => $this->const['UNABLE_TO_DELETE']], 400);

                    $deleteBlog->update(['isActive' => 0]);

                    if ($deleteBlog)
                        return (new ResponseHandler)->sendSuccessResponse(['message' => $this->const['BLOG_DELETE']]);

                    return (new ResponseHandler)->sendErrorResponse(['message' => $this->const['UNABLE_TO_DELETE']], 400);
                }else
                {
                    return (new ResponseHandler)->sendErrorResponse(['message' => $this->const['UNABLE_TO_DELETE']], 400);
                }
           
        } catch (Exception $e) {

            throw new GlobalException;

        }
    }

    public function getAllBlog(Request $request)
    {
        try {


            $pageOffset = (isset($request->pageOffset)) ? (int) $request->pageOffset : 10;

            $orderBy = (isset($request->orderBy)) ? $request->orderBy : 'id';

            $sort = (isset($request->sort)) ? $request->sort : 'desc';

            $getAllBlog = Blog::with('media:id,blog_id,media')
            ->where('blogs.isActive',1)
            ->leftJoin('users','users.id','=','blogs.createdBy')
            ->join('blog_category_masters','blog_category_masters.id','=','blogs.blogCategory')
            ->select('blogs.id','title','blog_category_masters.name','shortDesc','longDesc','timeToRead','hashTags','seoKeywords','createdBy');

           
            if(!empty($request->searchValue))
            {
                $getAllBlog = $getAllBlog->where('title','LIKE', '%' .$request->searchValue. '%')
                ->orWhere('shortDesc','LIKE', '%' .$request->searchValue. '%')
                ->orWhere('longDesc','LIKE', '%' .$request->searchValue. '%');
            }

            $getAllBlog = $getAllBlog->orderBy($orderBy,$sort)
            ->paginate($pageOffset);

            foreach ($getAllBlog as $val) {
                $getAllBlog->shortDesc = htmlspecialchars($val->shortDesc);
                $getAllBlog->longDesc = htmlspecialchars($val->longDesc);
                $val->hashTags = explode(",",$val->hashTags);
                $val->seoKeywords = explode(",",$val->seoKeywords);
            }

            return (new ResponseHandler)->sendSuccessResponse(new BlogResource($getAllBlog));

        } catch (Exception $e) {

            throw new GlobalException;

        }
    }

    public function getBlogById(Request $request,$id)
    {
        try {


                $getBlogById = Blog::with('media:id,blog_id,media')->join('users','users.id','=','blogs.createdBy')
                ->join('blog_category_masters','blog_category_masters.id','=','blogs.blogCategory')
                ->select('blogs.id','title','blog_category_masters.name','shortDesc','longDesc','timeToRead','hashTags','seoKeywords','createdBy')
                ->where('blogs.isActive',1)
                ->where('blogs.id',$id)
                ->first();

            if(!empty($getBlogById->shortDesc) && !empty($getBlogById->longDesc)){

                $getBlogById->shortDesc = htmlspecialchars($getBlogById->shortDesc);
                $getBlogById->longDesc = htmlspecialchars($getBlogById->longDesc);
                $getBlogById->hashTags = explode(",",$getBlogById->hashTags);
                $getBlogById->seoKeywords = explode(",",$getBlogById->seoKeywords);

            }

            return (new ResponseHandler)->sendSuccessResponse(new BlogResource($getBlogById));

        } catch (Exception $e) {

            throw new GlobalException;

        }
    }

    

    public function deleteImage(Request $request,$id){

        $deleteImage = BlogImage::where('id',$id)
        ->update([
            'isActive' => 0
        ]);

        if($deleteImage){
            return (new ResponseHandler)->sendSuccessResponse(['message' => $this->const['BLOG_IMAGE_DELETE']]);
        }

    }




}
