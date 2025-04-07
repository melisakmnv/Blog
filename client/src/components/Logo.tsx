

interface LogoProps {
    className? : string;
}
export const Logo = ({ className }: LogoProps) => {
  return (
      <div className={`font-DancingScript text-[#bba07f] ${className}`}>
          Story •
    </div>
  )
}
