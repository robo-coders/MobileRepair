<?php

namespace App\Http\Controllers;

use App\Models\Agent_application;
use App\Models\AgentApplication;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgentApplicationController extends Controller
{
    public function agentStatus($id)
    {
        $applications = AgentApplication::where('user_id', $id)->latest()->get();
        
        return Inertia::render('Applications/Status', [
            "applications" => $applications
        ]);
    }

    public function agentStatusToApprove(Request $request, $id)
    {
        $request->validate([
            'application_id' => ['required'],
            'status' => 'required',
            'reason' => 'required',
        ]);

        $application = Agent_application::findOrFail($request->id);
        $application->status = $request->status;
        $application->reason = $request->reason;
        $application->save();

        $user = User::findOrFail($request->user_id);
        $user->status = 'Active';
        $user->save();


        return back();
    }

    public function agentStatusToReject(Request $request, $id)
    {

        return $request;
    }
}
