<?php

namespace App\Http\Controllers;

use App\Models\CV;
use Illuminate\Http\Request;

class CVController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(CV $cv)
    {
        // Fetch the CV from the database
        $cv = CV::findOrFail($cv->id);

        // Return the CV details to the view
        return inertia('PreviewCVPage/PreviewCVPage', [
            'cv' => $cv,
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CV $cv)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CV $cv)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CV $cv)
    {
        //
    }
}
