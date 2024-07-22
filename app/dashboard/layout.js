import '../globals.css'
import '../../styles/style.css'

export const metadata = {
  title: 'Nextjs Project',
  description: 'Test project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
			<head>
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> 
				<link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.0.0/css/all.css" />
			</head>
			<body>
				{children}
			</body>
    </html>
  )
}

