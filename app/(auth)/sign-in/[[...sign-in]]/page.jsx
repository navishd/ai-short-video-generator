import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div>
      <div>
        <image src="/login.jpg" alt="Login" width={500} height={500} className='w-full object-contain'/>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <SignIn />
      </div>
    </div>
  )
}