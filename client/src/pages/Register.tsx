import { SignUp } from '@clerk/clerk-react'

export const Register = () => {
  return (
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <SignUp signInUrl="/login" />
      </div>
  )
}
