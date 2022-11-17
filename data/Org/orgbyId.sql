-- SELECT [eventId]
--     ,[eventTitle]
--     ,[eventDescription]
--     ,[startDate]
--     ,[endDate]
--     ,[avenue]
--     ,[maxMembers]
-- FROM [dbo].[events]
-- WHERE [eventId]=@eventId
SELECT [OrgId]
      ,[OrgName]
      ,[Logo]
      ,[ContactNo]
      ,[EmailAddress]
      ,[CountryId]
  FROM [dbo].[Organization]
  where [OrgId] = @orgId