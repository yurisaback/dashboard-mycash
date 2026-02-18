import { useState } from 'react';
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  CreditCard,
  Receipt,
  User,
  ChevronLeft,
} from 'lucide-react';
import svgPathsExpanded from '../../../imports/svg-ktrzjmn9hy';
import svgPathsCollapsed from '../../../imports/svg-i2a2eejqi9';
import imgMembers from 'figma:asset/fe5ea0dee337e6dfc2f8afea9ae4d945b9013911.png';

/**
 * Sidebar Component (Desktop Only)
 * Responsive sidebar with expand/collapse functionality
 * Visible only on desktop (≥1280px)
 */

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: CreditCard, label: 'Cartões', path: '/cards' },
  { icon: Receipt, label: 'Transações', path: '/transactions' },
  { icon: User, label: 'Perfil', path: '/profile' },
];

function MycashLogoExpanded() {
  return (
    <div className="h-[29.828px] relative shrink-0 w-[139.648px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 139.648 29.8285"
      >
        <g>
          <path d={svgPathsExpanded.p2ce6fd00} fill="var(--color-primary)" />
          <path d={svgPathsExpanded.p120da380} fill="var(--color-primary)" />
          <path d={svgPathsExpanded.p32cb9200} fill="var(--color-primary)" />
          <path d={svgPathsExpanded.p30fa5d80} fill="var(--color-primary)" />
          <path d={svgPathsExpanded.p3d412000} fill="var(--color-primary)" />
          <path d={svgPathsExpanded.p1211680} fill="var(--color-primary)" />
          <path d={svgPathsExpanded.pbb75a40} fill="var(--color-primary)" />
        </g>
      </svg>
    </div>
  );
}

function MycashLogoCollapsed() {
  return (
    <div className="h-[45.192px] relative shrink-0 w-[48.327px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48.3267 45.1915"
      >
        <g>
          <path d={svgPathsCollapsed.p1baab440} fill="var(--color-primary)" />
          <path d={svgPathsCollapsed.pb9093f0} fill="var(--color-primary)" />
          <path d={svgPathsCollapsed.p37dc6280} fill="var(--color-primary)" />
          <path d={svgPathsCollapsed.p8526000} fill="var(--color-primary)" />
          <path d={svgPathsCollapsed.pb92e680} fill="var(--color-primary)" />
          <path d={svgPathsCollapsed.p1211680} fill="var(--color-primary)" />
          <path d={svgPathsCollapsed.pbb75a40} fill="var(--color-primary)" />
        </g>
      </svg>
    </div>
  );
}

function MycashLogo({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MycashLogoExpanded />
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MycashLogoCollapsed />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  path,
  isExpanded,
}: {
  icon: typeof Home;
  label: string;
  path: string;
  isExpanded: boolean;
}) {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <motion.div
          className={`
            relative rounded-full w-full cursor-pointer transition-colors duration-200
            ${isActive ? 'bg-primary-accent' : 'hover:bg-muted'}
            content-stretch flex items-center px-4 py-3
            ${isExpanded ? 'gap-2' : 'gap-2 justify-center'}
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Icon
            size={16}
            className={`shrink-0 ${isActive ? 'text-primary' : 'text-primary'}`}
          />
          <AnimatePresence>
            {isExpanded && (
              <motion.p
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className={`
                  font-semibold text-lg tracking-[0.3px] leading-6 whitespace-nowrap overflow-hidden
                  ${isActive ? 'text-primary' : 'text-primary'}
                `}
              >
                {label}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </NavLink>
  );
}

function UserInfo({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div className={`
      content-stretch flex flex-col gap-3 relative shrink-0 w-full
      ${isExpanded ? 'items-start' : 'items-center'}
    `}>
      {/* Avatar */}
      <div className="relative shrink-0 size-6">
        <img
          alt="User avatar"
          className="block max-w-none size-full rounded-full"
          height="24"
          src={imgMembers}
          width="24"
        />
      </div>

      {/* Name & Email */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="content-stretch flex flex-col gap-1 items-start leading-5 not-italic tracking-[0.3px] text-primary w-full overflow-hidden"
          >
            <p className="font-semibold text-base w-full">Yuri Saback</p>
            <p className="font-normal text-sm w-full opacity-70">yuri@saback.com</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SidebarToggle({
  isExpanded,
  onClick,
}: {
  isExpanded: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="
        absolute -right-4 top-4 z-50
        size-8 rounded-full bg-card
        flex items-center justify-center
        shadow-md hover:shadow-lg
        transition-shadow duration-200
        border border-border
      "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ rotate: isExpanded ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronLeft size={16} className="text-primary" />
      </motion.div>
    </motion.button>
  );
}

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.aside
      className="
        hidden lg:flex flex-col
        bg-card border-r border-border
        h-screen sticky top-0 left-0
        shrink-0 relative
        justify-between
        p-8
      "
      animate={{
        width: isExpanded ? '300px' : '144px',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Toggle Button */}
      <SidebarToggle isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />

      {/* Top Section: Logo + Navigation */}
      <div className="content-stretch flex flex-col items-start shrink-0 w-full gap-14">
        {/* Logo */}
        <MycashLogo isExpanded={isExpanded} />

        {/* Navigation */}
        <nav className="flex flex-col gap-2 w-full">
          {navItems.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              isExpanded={isExpanded}
            />
          ))}
        </nav>
      </div>

      {/* Bottom Section: User Info */}
      <UserInfo isExpanded={isExpanded} />
    </motion.aside>
  );
}