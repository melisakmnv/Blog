import { useState } from "react"
import { AuthInput } from "../components/Auth.input"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"


export const LoginPage = () => {

    const [toggleSignIn, setToggleSignIn] = useState(true)

    const handleToggleSignIn = () => {
        setToggleSignIn((prev: boolean) => !prev)
    }
    return (
        <>

            {
                toggleSignIn ? (
                    <div className="w-full h-[calc(100vh-4rem)] flex justify-center items-center bg-[#f3f0e8]" >
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle className="font-Montserrat text-center text-lg tracking-wide">Story's Sign in</CardTitle>
                                <CardDescription className="font-Montserrat text-center text-xs font-light tracking-wide">We are happy to see you back</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="flex flex-col gap-4">
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <AuthInput
                                                label="E-mail"
                                                id="email"
                                            />
                                            <div className="h-[0.5rem]"></div>
                                            <AuthInput
                                                label="Password"
                                                id="password"
                                            />
                                        </div>
                                    </div>
                                    <div className="h-[0.5rem]"></div>
                                    <Button>Sign In</Button>
                                    <span className="font-Montserrat font-light text-xs text-center">─ Or sign in with ─</span>
                                    <div className="flex justify-center gap-4">
                                        <Button type="button">Google</Button>
                                        <Button type="button">Facebook</Button>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-center items-center">
                                <p className="font-Montserrat font-light text-xs text-center">Don't have any account ? {" "}
                                    <span onClick={handleToggleSignIn} className="font-medium underline cursor-pointer">Click here</span>
                                </p>
                            </CardFooter>
                        </Card>
                    </div >
                ) : (
                        <div className="w-full h-[calc(100vh-4rem)] flex justify-center items-center bg-[#f3f0e8]" >
                            <Card className="w-[350px]">
                                <CardHeader>
                                    <CardTitle className="font-Montserrat text-center text-lg tracking-wide">Story's Sign up</CardTitle>
                                    <CardDescription className="font-Montserrat text-center text-xs font-light tracking-wide">Already have an account ? {" "} 
                                        <span onClick={handleToggleSignIn} className="font-medium underline cursor-pointer">Click here</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="flex flex-col gap-4">
                                        <div className="grid w-full items-center gap-4">
                                            <div className="flex flex-col space-y-1.5">
                                                <AuthInput
                                                    label="E-mail"
                                                    id="email"
                                                />
                                                <div className="h-[0.5rem]"></div>
                                                <AuthInput
                                                    label="Password"
                                                    id="password"
                                                />
                                                <div className="h-[0.5rem]"></div>
                                                <AuthInput
                                                    label="Confirm password"
                                                    id="confirm-password"
                                                />
                                            </div>
                                        </div>
                                        <div className="h-[0.5rem]"></div>
                                        <Button>Sign Up</Button>
                                        <span className="font-Montserrat font-light text-xs text-center">─ Or sign up with ─</span>
                                        <div className="flex justify-center gap-4">
                                            <Button type="button">Google</Button>
                                            <Button type="button">Facebook</Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </div >
                )
            }
        </>

    )
}

