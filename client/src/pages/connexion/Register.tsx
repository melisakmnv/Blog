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
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
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
		<div className="flex items-center justify-center bg-background">
			<Card className="w-full max-w-md mx-4">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center">Créer un compte</CardTitle>
					<CardDescription className="text-center">
						Entrez vos informations pour vous inscrire
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<FormField
								control={form.control}
								name="firstname"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Prénom</FormLabel>
										<FormControl>
											<Input placeholder="Votre prénom" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="lastname"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nom de famille</FormLabel>
										<FormControl>
											<Input placeholder="Votre nom de famille" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input type="email" placeholder="votre.email@exemple.com" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Mot de passe</FormLabel>
										<FormControl>
											<Input type="password" placeholder="********" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Confirmer le mot de passe</FormLabel>
										<FormControl>
											<Input type="password" placeholder="********" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit" className="w-full" disabled={isLoading}>
								{isLoading ? 'Inscription en cours...' : "S'inscrire"}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
};
