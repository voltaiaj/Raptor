CREATE TABLE [Raptor].[StylistLicensee]
(
	[Id] INT NOT NULL IDENTITY,
	[LicenseNumber] INT NOT NULL,
	[ExpirationDate] DATETIME2 NOT NULL,
	[FirstName] NVARCHAR(15),
	[LastName] NVARCHAR(15),
	[City] NVARCHAR(15),
	[ZipCode] INT NOT NULL,
	[County] NVARCHAR(10),
	[Phone] INT,
	CONSTRAINT [PK_StylistLicensee] PRIMARY KEY ([Id])
)