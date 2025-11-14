<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'contenu' => 'required',
            'user_id' => 'required',
            'announcement_id' => 'required'
        ]);

        return Comment::create($request->all());
    }

    public function destroy($id)
    {
        Comment::destroy($id);
        return response()->json(['message' => 'Comment deleted']);
    }
}
