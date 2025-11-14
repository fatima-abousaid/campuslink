<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    public function index()
    {
        return Announcement::with('user', 'comments')->get();
    }

    public function show($id)
    {
        return Announcement::with('user', 'comments')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required',
            'description' => 'required',
            'categorie' => 'nullable',
            'user_id' => 'required'
        ]);

        return Announcement::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $announcement = Announcement::findOrFail($id);

        $request->validate([
            'titre' => 'required',
            'description' => 'required',
            'categorie' => 'nullable',
        ]);

        $announcement->update($request->all());

        return $announcement;
    }

    public function destroy($id)
    {
        $announcement = Announcement::findOrFail($id);
        $announcement->delete();

        return response()->json(['message' => 'Announcement deleted']);
    }
}
