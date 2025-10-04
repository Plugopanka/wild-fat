import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => (
  <h2 className={className}>{children}</h2>
);

export default SectionTitle;
