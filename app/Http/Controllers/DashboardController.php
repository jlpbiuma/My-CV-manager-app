<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CV;
use App\Models\Activity;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        // Get the authenticated user's ID
        $userId = Auth::id();

        // Fetch CVs and activities for the authenticated user
        $cvs = CV::where('user_id', $userId)->get();
        $activities = Activity::where('user_id', $userId)->get();

        // Return the data to the Inertia view
        return Inertia::render('DashboardPage/DashboardPage', [
            'cvs' => $cvs,
            'activities' => $activities,
        ]);
    }
}
