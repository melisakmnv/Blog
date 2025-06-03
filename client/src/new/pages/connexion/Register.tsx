import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useSignup } from '@/hooks/useSignup';

const registerFormSchema = z.object({
	firstname: z.string().min(1, {
		message: "Le prénom est requis.",
	}),
	lastname: z.string().min(1, {
		message: "Le nom de famille est requis.",
	}),
	email: z.string().email({
		message: "Veuillez entrer une adresse e-mail valide.",
	}),
	password: z.string().min(5, {
		message: "Le mot de passe doit comporter au moins 5 caractères.",
	}),
	confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
	message: "Les mots de passe ne correspondent pas.",
	path: ["confirmPassword"],
});

export type RegisterSchema = Omit<z.infer<typeof registerFormSchema>, 'confirmPassword'>;

export const Register = () => {
	const form = useForm<z.infer<typeof registerFormSchema>>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const { signupUser, isLoading } = useSignup();

	function onSubmit(values: z.infer<typeof registerFormSchema>) {
		const { confirmPassword, ...registrationData } = values;
		signupUser(registrationData);
	}

	return (
		<div className="flex min-h-[80vh] items-center justify-center">
            <div className="w-full max-w-md px-8 py-10 bg-white rounded-2xl shadow-xl border border-gray-100">
                <div className="mb-8 text-center">
					<h1 className="text-3xl font-bold text-[#BBA07F]">Créez votre compte</h1>
                    <p className="mt-2 text-gray-600">Rejoignez notre communauté</p>
                </div>
                
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 font-medium">Prénom</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>
                                            </span>
                                            <Input 
                                                placeholder="Votre prénom" 
                                                {...field} 
                                                className="pl-10 py-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 font-medium">Nom de famille</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>
                                            </span>
                                            <Input 
                                                placeholder="Votre nom de famille" 
                                                {...field} 
                                                className="pl-10 py-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                                </svg>
                                            </span>
                                            <Input 
                                                type="email" 
                                                placeholder="votre.email@exemple.com" 
                                                {...field} 
                                                className="pl-10 py-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 font-medium">Mot de passe</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                </svg>
                                            </span>
                                            <Input 
                                                type="password" 
                                                placeholder="••••••" 
                                                {...field} 
                                                className="pl-10 py-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 font-medium">Confirmer le mot de passe</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                </svg>
                                            </span>
                                            <Input 
                                                type="password" 
                                                placeholder="••••••" 
                                                {...field} 
                                                className="pl-10 py-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm" />
                                </FormItem>
                            )}
                        />
                        
                        <Button 
                            type="submit" 
                            disabled={isLoading} 
                            className="w-full py-2.5 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Inscription en cours...
                                </div>
                            ) : "S'inscrire"}
                        </Button>
                        
                        <div className="flex items-center justify-center mt-6 space-x-2">
                            <span className="text-sm text-gray-600">Déjà un compte ?</span>
                            <Link to="/login" className="text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors">
                                Se connecter
                            </Link>
                        </div>
                    </form>
                </Form>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs text-center text-gray-500">
                        En vous inscrivant, vous acceptez nos <a href="#" className="text-gray-900 hover:underline">Conditions d'utilisation</a> et notre <a href="#" className="text-gray-900 hover:underline">Politique de confidentialité</a>.
                    </p>
                </div>
            </div>
        </div>
	);
};
