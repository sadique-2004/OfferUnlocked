// Shared avatar components used in AdminCard and MemberCard

export function AvatarSmall({ image, gender }) {
  if (image) {
    return (
      <img
        src={image}
        alt="avatar"
        className="w-full h-full object-cover rounded-[8px]"
      />
    );
  }
  return gender === 'female' ? <FemaleAvatarSm /> : <MaleAvatarSm />;
}

export function AvatarLarge({ image, gender }) {
  if (image) {
    return (
      <img
        src={image}
        alt="avatar"
        className="w-full h-full object-cover rounded-full"
      />
    );
  }
  return gender === 'female' ? <FemaleAvatarLg /> : <MaleAvatarLg />;
}

function MaleAvatarSm() {
  return (
    <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="msm" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4f46e5" /><stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <rect width="38" height="38" rx="9" fill="url(#msm)" />
      <circle cx="19" cy="15" r="6" fill="rgba(255,255,255,.88)" />
      <path d="M5 34c0-7.73 6.27-14 14-14s14 6.27 14 14" fill="rgba(255,255,255,.7)" />
    </svg>
  );
}

function FemaleAvatarSm() {
  return (
    <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fsm" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c3aed" /><stop offset="1" stopColor="#db2777" />
        </linearGradient>
      </defs>
      <rect width="38" height="38" rx="9" fill="url(#fsm)" />
      <circle cx="19" cy="15" r="6" fill="rgba(255,255,255,.88)" />
      <path d="M5 34c0-7.73 6.27-14 14-14s14 6.27 14 14" fill="rgba(255,255,255,.7)" />
      <path d="M14 9.5Q19 7 24 9.5" stroke="rgba(255,255,255,.6)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function MaleAvatarLg() {
  return (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mlg" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4f46e5" /><stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <circle cx="36" cy="36" r="36" fill="url(#mlg)" />
      <circle cx="36" cy="28" r="11" fill="rgba(255,255,255,.88)" />
      <path d="M9 66c0-14.9 12.1-27 27-27s27 12.1 27 27" fill="rgba(255,255,255,.72)" />
    </svg>
  );
}

function FemaleAvatarLg() {
  return (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="flg" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c3aed" /><stop offset="1" stopColor="#db2777" />
        </linearGradient>
      </defs>
      <circle cx="36" cy="36" r="36" fill="url(#flg)" />
      <circle cx="36" cy="28" r="11" fill="rgba(255,255,255,.88)" />
      <path d="M9 66c0-14.9 12.1-27 27-27s27 12.1 27 27" fill="rgba(255,255,255,.72)" />
      <path d="M26 17.5Q36 12 46 17.5" stroke="rgba(255,255,255,.6)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function LinkedInIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function DiscordIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
