<?php

namespace App\Http\Controllers;

use App\Models\CV;
use Illuminate\Http\Request;
use App\Models\Experience;
use App\Models\Formacion;
use App\Models\Idiomas;
use App\Models\Proyects;
use App\Models\Web;
use App\Models\Estudios;
use App\Models\Certifications;


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

    public function build(int $cv_id)
    {
        // Fetch the CV from the database
        $cv = CV::findOrFail($cv_id);

        // Fetch related models
        $experiences = Experience::where('cv_id', $cv_id)->get();
        $formaciones = Formacion::where('cv_id', $cv_id)->get();
        $idiomas = Idiomas::where('cv_id', $cv_id)->get();
        $proyects = Proyects::where('cv_id', $cv_id)->get();
        $webs = Web::where('cv_id', $cv_id)->get();
        $estudios = Estudios::where('cv_id', $cv_id)->get();
        $certifications = Certifications::where('cv_id', $cv_id)->get();
        // Return the CV details and related models to the view
        return inertia('BuildCVPage/BuildCVPage', [
            'cv' => $cv,
            'sections' => [
                'experiencias' => $experiences,
                'formaciones' => $formaciones,
                'idiomas' => $idiomas,
                'proyectos' => $proyects,
                'webs' => $webs,
                'estudios' => $estudios,
                'certificaciones' => $certifications,
            ],
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
