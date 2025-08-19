<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Services\RoleService;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): Response
    {
        $users = User::with('roles')->get()->values()->toArray();
        return Inertia::render('User/Index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = (new RoleService())->getRoleOptions();
        return Inertia::render('User/Create', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $user = User::create($validated);
        $user->roles()->attach($validated['roles']);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
            'status' => 'success'
        ], 201);
    }
}
