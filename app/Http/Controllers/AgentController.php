<?php

namespace App\Http\Controllers;

use App\Models\Agent_application;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AgentController extends Controller
{

    public function applications() 
    {
        $applications = Auth::user()->agentApplications()->latest()->get();

        return Inertia::render('Agent/Dashboard', [
            "applications" => $applications
        ]);
    }

    public function upload() 
    {
        $application = Auth::user()->agentApplications()->latest()->first();

        if (!$application || $application->status == "Rejected") {
            return Inertia::render('Agent/Upload');
        }

        return redirect("/dashboard");
    }

    public function applicationList()
    {
        $users = User::where('role', 'agent')->where('status', 'pending')->latest()->get();

        return Inertia::render('Applications/List', [
            'users' => $users,
        ]);

    }

    public function saveApplication(Request $request)
    {
        $request->validate([
            'nie' => ['required', 'mimes:pdf', 'max:5120'],
            'modelo' => ['required', 'mimes:pdf', 'max:5120'],
            'others' => ['nullable', 'mimes:pdf', 'max:5120'],
        ]);

        $user_id = Auth::id();
        $nie = $request->file('nie')->store('public/documents');
        $modelo = $request->file('modelo')->store('public/documents');
        $others = $request->file('others')->store('public/documents');

        Agent_application::create([

            'user_id' => $user_id,
            'nie' => str_replace("public", "storage", $nie),
            'modelo' => str_replace("public", "storage", $modelo),
            'others' => str_replace("public", "storage", $others)
            
        ]);

        return redirect("/dashboard");

    }

    public function approveApplication($id)
    {
        return " Code Commented " ;
        // $user = User::findOrFail($id);
        // $user->status = 'Active';
        // $user->save();

        // $user = $user->agentApplication;
        // $user->status = 'Active';
        // $user->save();
        
        // return back();

    }
}
