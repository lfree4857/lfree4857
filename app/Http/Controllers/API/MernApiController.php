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
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

use App\Http\Requests\{
    AddBlogRequest,
    EditBlogRequest
};
use GuzzleHttp\Exception\RequestException;
use Illuminate\Http\JsonResponse;

class MernApiController extends Controller
{

    private $const;
    public function __construct()
    {
        $this->const = (new Constants)->getConstants();
    }

    public function fetchPosts(Request $request): JsonResponse
    {
        $client = new Client([
            'verify' => false,
        ]);

        $queryParams = [
            'offset' => $request->query('offset', 0),
            'limit' => $request->query('limit', 9),
            'order' => $request->query('order', 'desc'),
            'userId' => $request->query('userId'),
            'category' => $request->query('category'),
            'slug' => $request->query('slug'),
            'postId' => $request->query('postId'),
            'searchTerm' => $request->query('searchTerm'),
        ];

        // Remove null values from query array
        $filteredParams = array_filter($queryParams, fn($value) => !is_null($value) && $value !== '');

        $url = 'https://blog-app-client-5fo9.onrender.com/api/v1/post/getAllPosts';

        try {
            $promise = $client->getAsync($url, [
                'query' => $filteredParams,
                'headers' => [
                    'Accept' => 'application/json'
                ],
            ]);

            $response = $promise->wait();

            $body = $response->getBody()->getContents();
            $json = json_decode($body, true);

            return response()->json($json);

        } catch (RequestException $e) {
            $message = $e->hasResponse()
                ? $e->getResponse()->getBody()->getContents()
                : $e->getMessage();

            return response()->json([
                'message' => 'Failed to fetch blog posts',
                'error' => $message
            ], 500);
        }
    }

     public function fetchProjects(Request $request): JsonResponse
    {
        $client = new Client([
            'verify' => false,
        ]);

        $queryParams = [
            'offset' => $request->query('offset', 0),
            'limit' => $request->query('limit', 9),
            'order' => $request->query('order', 'desc'),
            'userId' => $request->query('userId'),
            'category' => $request->query('category'),
            'slug' => $request->query('slug'),
            'postId' => $request->query('postId'),
            'searchTerm' => $request->query('searchTerm'),
        ];

        // Remove null values from query array
        $filteredParams = array_filter($queryParams, fn($value) => !is_null($value) && $value !== '');

        $url = 'https://blog-app-client-5fo9.onrender.com/api/v1/project/getAllProjects';

        try {
            $promise = $client->getAsync($url, [
                'query' => $filteredParams,
                'headers' => [
                    'Accept' => 'application/json'
                ],
            ]);

            $response = $promise->wait();

            $body = $response->getBody()->getContents();
            $json = json_decode($body, true);

            return response()->json($json);

        } catch (RequestException $e) {
            $message = $e->hasResponse()
                ? $e->getResponse()->getBody()->getContents()
                : $e->getMessage();

            return response()->json([
                'message' => 'Failed to fetch blog posts',
                'error' => $message
            ], 500);
        }
    }

}
