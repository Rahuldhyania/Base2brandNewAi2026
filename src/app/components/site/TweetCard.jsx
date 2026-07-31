'use client';
import { useState } from "react";
import { Heart, Link2, Check } from "lucide-react";
import { SiX } from "react-icons/si";

/**
 * TweetCard — static, presentation-only tweet card.
 * Style and layout faithfully adapted from the supplied 21st.dev Tweet
 * component, but without the `react-tweet` runtime dependency so we can
 * publish curated thought-leadership posts directly inline.
 *
 * Props:
 *   name, handle, verified, avatar (img URL)
 *   body  — string or React node; URLs/hashtags must already be styled
 *   tags  — array of { type: 'tag'|'link', text, href? } for inline emphasis
 *   date  — ISO string
 *   likes — number
 *   url   — full tweet URL (link to X / Twitter, used by share/copy)
 */

const VerifiedBadge = ({ className = "" }) => (
  <svg
    viewBox="0 0 22 22"
    className={className}
    fill="currentColor"
    aria-label="Verified account"
    role="img"
  >
    <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
  </svg>
);

const formatNumber = (n) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
};

const formatDate = (s) => {
  const d = new Date(s);
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",
  ];
  const h = d.getHours();
  const m = d.getMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${ampm} · ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
};

const renderBody = (body) => {
  if (typeof body !== "string") return body;
  // Replace inline markup: **bold**, #hashtag, @mention
  const parts = body.split(/(\*\*[^*]+\*\*|#[\w-]+|@[\w-]+)/g);
  return parts.map((p, i) => {
    if (/^\*\*[^*]+\*\*$/.test(p))
      return (
        <strong key={i} className="text-white font-semibold">
          {p.slice(2, -2)}
        </strong>
      );
    if (/^#[\w-]+$/.test(p))
      return (
        <a key={i} href="#" className="text-[#A855F7] hover:underline">
          {p}
        </a>
      );
    if (/^@[\w-]+$/.test(p))
      return (
        <a key={i} href="#" className="text-[#A855F7] hover:underline">
          {p}
        </a>
      );
    return <span key={i}>{p}</span>;
  });
};

const TweetCard = ({
  name,
  handle,
  verified = true,
  avatar,
  body,
  date,
  likes,
  url = "#",
  className = "",
  testId,
}) => {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <article
      data-testid={testId}
      className={`w-full max-w-[590px] rounded-2xl p-3 md:p-6 bg-[#0B0716] border border-white/[0.06] hover:border-[#8B5CF6]/30 transition-colors text-white/90 ${className}`}
    >
      <header className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          {avatar ? (
            <img
              src={avatar}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className="size-10 rounded-full object-cover"
            />
          ) : (
            <div className="size-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center text-white text-sm font-semibold">
              {name?.[0] || "B"}
            </div>
          )}
          <div className="flex flex-col leading-tight">
            <span className="flex items-center gap-1 text-[15px] font-semibold text-white">
              {name}
              {verified && <VerifiedBadge className="size-4 text-[#A855F7]" />}
            </span>
            <span className="text-[13px] text-white/45">@{handle}</span>
          </div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on X"
          className="text-white/55 hover:text-white transition-colors"
        >
          <SiX className="size-5" />
        </a>
      </header>

      <div className="mt-3.5 text-[15px] leading-6 text-white/75 whitespace-pre-line">
        {renderBody(body)}
      </div>

      {date && (
        <div className="mt-4">
          <time
            className="text-[13px] text-white/40"
            dateTime={date}
          >
            {formatDate(date)}
          </time>
        </div>
      )}

      <div className="mt-3 flex items-center gap-5 border-t border-white/5 pt-3">
        <a
          href={`${url}#like`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-white/55 hover:text-pink-500 transition-colors"
        >
          <Heart className="size-4 group-hover:fill-pink-500 group-hover:scale-110 transition-all" />
          <span className="text-[13px]">{formatNumber(likes || 0)}</span>
        </a>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-1.5 text-white/55 hover:text-white transition-colors"
        >
          {copied ? (
            <Check className="size-4 text-emerald-400" />
          ) : (
            <Link2 className="size-4" />
          )}
          <span className="text-[13px]">{copied ? "Copied" : "Copy link"}</span>
        </button>
      </div>
    </article>
  );
};

export default TweetCard;
