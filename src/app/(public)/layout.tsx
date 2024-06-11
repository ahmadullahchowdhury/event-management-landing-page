import { Fragment } from 'react';
// import ScrollTop from 'view/ui/shared-component/scrollTop'

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative overflow-hidden'>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}
