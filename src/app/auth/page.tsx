"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowLeft, 
  GitBranch, 
  Mail, 
  ChevronRight,
  ShieldCheck,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <main className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-primary/20">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary-fixed-dim/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] grayscale" />
      </div>

      {/* Header / Logo */}
      <div className="absolute top-8 left-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white shadow-sm rounded-lg flex items-center justify-center text-primary group-hover:shadow-md transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="text-sm font-bold text-secondary">Back to Home</span>
        </Link>
      </div>

      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-2xl text-white mb-6 shadow-ambient">
            <Sparkles className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-on-surface mb-2 tracking-tight">
            {mode === "login" ? "Welcome Back" : "Start your Research"}
          </h1>
          <p className="text-secondary text-sm font-medium">
            {mode === "login" 
              ? "Continue your intellectual journey with Scholarian" 
              : "Create an account to begin your analytical project"}
          </p>
        </div>

        <Card className="border-none shadow-ambient-lg bg-white overflow-hidden rounded-3xl">
          <CardHeader className="pb-4">
            <div className="flex bg-surface p-1 rounded-xl">
              <button 
                onClick={() => setMode("login")}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${mode === "login" ? "bg-white text-primary shadow-sm" : "text-secondary hover:text-primary"}`}
              >
                SIGN IN
              </button>
              <button 
                onClick={() => setMode("signup")}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${mode === "signup" ? "bg-white text-primary shadow-sm" : "text-secondary hover:text-primary"}`}
              >
                CREATE ACCOUNT
              </button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            
            {mode === "signup" && (
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-secondary uppercase tracking-widest ml-1">Full Name</label>
                <Input placeholder="John Doe" className="bg-surface border-none h-11 px-4 rounded-xl focus-visible:ring-primary/20" />
              </div>
            )}

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-secondary uppercase tracking-widest ml-1">Email Address</label>
              <Input type="email" placeholder="scholar@university.edu" className="bg-surface border-none h-11 px-4 rounded-xl focus-visible:ring-primary/20" />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-secondary uppercase tracking-widest ml-1">Password</label>
                {mode === "login" && (
                  <Link href="#" className="text-[10px] font-bold text-primary hover:underline">FORGOT?</Link>
                )}
              </div>
              <Input type="password" placeholder="••••••••" className="bg-surface border-none h-11 px-4 rounded-xl focus-visible:ring-primary/20" />
            </div>

            <Button className="w-full bg-primary hover:bg-primary-container text-white h-12 rounded-xl font-bold text-sm tracking-wide mt-2 shadow-sm">
              {mode === "login" ? "PROCEED TO DASHBOARD" : "INITIALIZE ACCOUNT"}
            </Button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-secondary/10" />
              </div>
              <div className="relative flex justify-center text-[10px] font-bold tracking-widest uppercase">
                <span className="bg-white px-3 text-secondary/40">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="bg-white border border-secondary/10 hover:bg-surface h-11 rounded-xl text-xs font-bold text-secondary gap-2">
                <GitBranch className="w-4 h-4" /> GITHUB
              </Button>
              <Button variant="outline" className="bg-white border border-secondary/10 hover:bg-surface h-11 rounded-xl text-xs font-bold text-secondary gap-2">
                <Mail className="w-4 h-4" /> GOOGLE
              </Button>
            </div>
          </CardContent>
          <CardFooter className="bg-surface/50 border-t border-secondary/5 py-4 flex flex-col gap-3">
             <div className="flex items-center gap-2 opacity-60">
                <ShieldCheck className="w-3.5 h-3.5 text-tertiary" />
                <span className="text-[10px] font-bold text-secondary tracking-wide uppercase">Enterprise-Grade Security Enforced</span>
             </div>
             {/* <p className="text-[9px] text-secondary text-center px-6 leading-relaxed">
                By proceeding, you agree to Scholarian's <Link href="#" className="text-primary underline">Terms of Service</Link> and <Link href="#" className="text-primary underline">Research Ethics Policy</Link>.
             </p> */}
          </CardFooter>
        </Card>

        <p className="text-center mt-8 text-xs font-medium text-secondary/60">
          © 2024 Scholarian AI. Precision in every insight.
        </p>
      </div>
    </main>
  );
}
